import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Screen, Content, Text } from '@comp';
import { User, AppStorage } from '@stores';

type Props = {
  navigation: any
};
type State = {
  username: string
};

export default class RegistrationScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: ''
    };
    this.userStore = null;
  }

  createNewUser = () => {
    const { username } = this.state;
    const { navigation } = this.props;
    const userId = uuid();
    const deviceId = uuid();
    const newUser = { username, userId, level: 1 };
    this.userStore = User.create(newUser);
    AppStorage.register(newUser, deviceId); // TODO: yhdistä appstorage ja mst
    navigation.navigate('home');
  };

  render() {
    const { userId, username } = this.state;
    return (
      <Screen>
        <Content>
          <Text>Register</Text>
          <Text>{userId}</Text>
          <Text>{username}</Text>
        </Content>
      </Screen>
    );
  }
}
