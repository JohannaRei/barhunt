// @flow
import React from 'react';
import { Screen, Text, StartBackground } from '@comp';
import { Button } from 'native-base';

type Props = {
  navigation: any
};

const StartScreen = ({ navigation }: Props) => (
  <Screen>
    <StartBackground />
    <Text tx="startScreen.welcome" />
    <Button block onPress={() => navigation.navigate('name')}>
      <Text tx="startScreen.button" />
    </Button>
  </Screen>
);

export default StartScreen;
