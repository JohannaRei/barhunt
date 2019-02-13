// @flow
import React, { Component } from 'react';
// import uuid from 'uuid/v4';
import firebase from 'react-native-firebase';
import {
  Screen, Content, Text, TextInput, Button
} from '@comp';
// import { User, AppStorage } from '@stores';
import i18n from '@lang';

type Props = {
  login?: boolean,
  navigation: any
};

type State = {
  email: ?string,
  password: ?string,
  errorMsg: ?string
};

export class RegistrationScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errorMsg: null
    };
  }

  onChangeText = (key: string, value: string) => this.setState({ [key]: value });

  onSubmit = () => {
    const { email, password } = this.state;
    const { login, navigation } = this.props;

    if (email && password) {
      // const deviceId = uuid();

      if (!login) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log(user);
          })
          .catch(error => this.handleError(error));
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            navigation.navigate('home');
          })
          .catch(error => this.handleError(error));
      }
    }
  };

  handleError = (error: { code: string }) => {
    const { code } = error;
    const errorMsg = i18n(`registrationScreen.error.${code.substring(5)}`);
    this.setState({ errorMsg, password: '' });
  };

  render() {
    const { login } = this.props;
    const { email, password, errorMsg } = this.state;
    const title = login ? 'Login' : 'Register';
    return (
      <Screen>
        <Content>
          <Text>{title}</Text>
          <TextInput
            name="email"
            onChangeText={this.onChangeText}
            placeholder="Email"
            value={email}
          />
          <Text>{email}</Text>
          <TextInput
            name="password"
            onChangeText={this.onChangeText}
            placeholder="Password"
            value={password}
          />
          <Text style={{ color: 'red' }}>{errorMsg}</Text>
          <Button onPress={this.onSubmit} title={title} />
        </Content>
      </Screen>
    );
  }
}

const LoginScreen = (props: Props) => <RegistrationScreen login {...props} />;

export { LoginScreen };
