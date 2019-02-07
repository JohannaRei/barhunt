// @flow
import React, { Component } from 'react';
import { Screen, Text } from '@comp';
import { AppStorage } from '@stores';

type Props = {
  navigation: any
};

export default class SplashScreen extends Component<Props> {
  componentDidMount() {
    setTimeout(this.checkUserStatus, 5000);
  }

  checkUserStatus = () => {
    const { navigation } = this.props;
    AppStorage.getUserData().then((res) => {
      if (res) {
        navigation.navigate('home');
      } else {
        navigation.navigate('register');
      }
    });
  };

  render() {
    return (
      <Screen>
        <Text>Splash</Text>
      </Screen>
    );
  }
}
