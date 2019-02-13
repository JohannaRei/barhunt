// @flow
import React, { Component } from 'react';
// import uuid from 'uuid/v4';
import firebase from 'react-native-firebase';
import {
  Screen, Content, Text, TextInput, Button
} from '@comp';
// import { User, AppStorage } from '@stores';

type Props = {
  login?: boolean,
  navigation: any
};

type State = {
  username: ?string,
  email: ?string,
  password: ?string,
  errorMsg: ?string
};

export class RegistrationScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      errorMsg: null
    };
  }

  onChangeText = (key: string, value: string) => this.setState({ [key]: value });

  onSubmit = () => {
    const { username, email, password } = this.state;
    const { login, navigation } = this.props;

    if (email && password) {
      // const deviceId = uuid();

      if (!login) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            if (user) {
              user.updateProfile({
                displayName: username
              });
            }
            console.log(user);
          })
          .catch(error => this.handleError(error));
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log(user);
            navigation.navigate('home');
          })
          .catch(error => this.handleError(error));
      }
    }
  };

  handleError = (error: { code: string }) => {
    console.log(error.message);
    const { code } = error;
    const errorMsg = `authScreen.error.${code ? code.substring(5) : 'unknown'}`;
    this.setState({ errorMsg, password: '' });
  };

  render() {
    const { login } = this.props;
    const {
      username, email, password, errorMsg
    } = this.state;
    const title = `authScreen.${login ? 'signin' : 'register'}`;
    return (
      <Screen>
        <Content>
          <Text tx={title} />
          <TextInput
            name="username"
            onChangeText={this.onChangeText}
            placeholder="Username"
            value={username}
          />
          <TextInput
            name="email"
            onChangeText={this.onChangeText}
            placeholder="Email"
            value={email}
          />
          <TextInput
            name="password"
            onChangeText={this.onChangeText}
            placeholder="Password"
            value={password}
          />
          <Text style={{ color: 'red' }} tx={errorMsg} />
          <Button onPress={this.onSubmit} title={title} />
        </Content>
      </Screen>
    );
  }
}

const SigninScreen = (props: Props) => <RegistrationScreen login {...props} />;

export { SigninScreen };
