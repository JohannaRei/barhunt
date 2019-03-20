// @flow
import React, { Component } from 'react';
import { Screen, Content, ChallengeButton } from '@comp';
import challenges from '../data/challenges'; // todo: move to firestore

type Props = {
  navigation: any
};
type State = {};

export default class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onPressChallenge = (name: string) => {
    const { navigation } = this.props;
    console.log(name);
    // move current challenge details to state
    navigation.navigate('challengeStart');
  };

  render() {
    return (
      <Screen>
        <Content>
          {challenges.map(c => (
            <ChallengeButton onPress={() => this.onPressChallenge(c.name)} data={c} />
          ))}
        </Content>
      </Screen>
    );
  }
}
