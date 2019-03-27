// @flow
import React from 'react';
import {
  Screen, Content, Button, Text
} from '@comp';

type Props = {
  navigation: any
};

const StartScreen = ({ navigation }: Props) => (
  <Screen>
    <Content>
      <Text tx="startScreen.welcome" />
      <Button onPress={() => navigation.navigate('name')} title="startScreen.button" />
    </Content>
  </Screen>
);

export default StartScreen;
