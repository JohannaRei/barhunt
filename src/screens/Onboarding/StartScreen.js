// @flow
import React from 'react';
import { Screen, Content, Button } from '@comp';

type Props = {
  navigation: any
};

const StartScreen = ({ navigation }: Props) => (
  <Screen>
    <Content>
      <Button onPress={() => navigation.navigate('nameScreen')} title="Start" />
    </Content>
  </Screen>
);

export default StartScreen;
