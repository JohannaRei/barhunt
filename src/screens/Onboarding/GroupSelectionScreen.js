// @flow
import React, { Component } from 'react';
import { Screen, Text } from '@comp';
import { Button } from 'native-base';

type Props = {
  navigation: any
};

export default class GroupSelectionScreen extends Component<Props> {
  onPressButton = (type: string) => {
    const { navigation } = this.props;
    if (type === 'solo') {
      // register team of one logic
      console.log('team of one');
    }
    navigation.navigate(type);
  };

  render() {
    return (
      <Screen>
        <Text tx="groupSelectionScreen.title" />
        <Button onPress={() => this.onPressButton('home')}>
          <Text tx="groupSelectionScreen.solo" />
        </Button>
        <Button onPress={() => this.onPressButton('group')}>
          <Text tx="groupSelectionScreen.group" />
        </Button>
      </Screen>
    );
  }
}
