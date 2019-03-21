// @flow
import React, { Component } from 'react';
import {
  Screen, Content, Text, Button
} from '@comp';

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
        <Content>
          <Text>Register</Text>
          <Button title="Solo" onPress={() => this.onPressButton('home')} />
          <Button title="Group" onPress={() => this.onPressButton('group')} />
        </Content>
      </Screen>
    );
  }
}
