import React, { Component } from 'react';
import { Screen, Text } from '@comp';

type Props = {};

export default class SplashScreen extends Component<Props> {
  checkUserStatus = () => {};

  render() {
    return (
      <Screen>
        <Text>Splash</Text>
      </Screen>
    );
  }
}
