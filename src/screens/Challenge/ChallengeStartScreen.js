// @flow
import React, { Component } from 'react';
import { Screen, Content, Text } from '@comp';

type Props = {
  navigation: any
};
type State = {};

export default class ChallengeStartScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onPressStart = () => {
    const { navigation } = this.props;
    navigation.navigate('locationClue');
  };

  render() {
    return (
      <Screen>
        <Content>
          <Text>Challenge</Text>
          {/* title */}
          {/* description, level, timer yms. */}
          {/* map */}
          {/* start */}
        </Content>
      </Screen>
    );
  }
}
