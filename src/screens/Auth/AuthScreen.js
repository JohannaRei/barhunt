// @flow
import React, { Component } from 'react';
import { Screen, Text } from '@comp';
import { Button } from 'native-base';

type Props = {
  navigation: any
};

export default class AuthScreen extends Component<Props> {
  navigateTo = (screen: string) => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <Screen>
        <Text tx="authScreen.welcome" />
        <Button block onPress={() => this.navigateTo('register')}>
          <Text tx="authScreen.register" />
        </Button>
        <Button block onPress={() => this.navigateTo('signin')}>
          <Text tx="authScreen.signin" />
        </Button>
      </Screen>
    );
  }
}
