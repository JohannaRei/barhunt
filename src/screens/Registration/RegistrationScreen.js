// @flow
import React, { Component } from 'react';
import uuid from 'uuid/v4';
import {
  Screen, Content, Text, TextInput, Button
} from '@comp';
import { User, AppStorage } from '@stores';

type Props = {
  navigation: any
};

type State = {
  username: string,
  password: string
};

export default class RegistrationScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChangeText = (key: string, value: string) => this.setState({ [key]: value });

  onSubmit = () => {
    const { username } = this.state;
    const { navigation } = this.props;

    const userId = uuid();
    const deviceId = uuid();

    const newUser = { username, userId, level: 1 };

    User.create(newUser);
    AppStorage.register(newUser, deviceId); // TODO: yhdistä appstorage ja mst

    navigation.navigate('home');
  };

  render() {
    const { username, password } = this.state;
    return (
      <Screen>
        <Content>
          <Text>Register</Text>
          <TextInput name="username" onChangeText={this.onChangeText} placeholder="Username" />
          <Text>{username}</Text>
          <TextInput name="password" onChangeText={this.onChangeText} placeholder="Password" />
          <Text>{password}</Text>
          <Button onPress={this.onSubmit} title="Register" />
        </Content>
      </Screen>
    );
  }
}
