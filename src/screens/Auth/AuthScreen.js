// @flow
import React, { Component } from 'react';
import {
  Screen, Content, Text, Button
} from '@comp';

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
        <Content>
          <Text tx="authScreen.welcome" />
          <Button onPress={() => this.navigateTo('register')} title="authScreen.register" />
          <Button onPress={() => this.navigateTo('signin')} title="authScreen.signin" />
        </Content>
      </Screen>
    );
  }
}
