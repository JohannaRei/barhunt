// @flow
import React, { Component } from 'react';
import { Screen, Content, ChallengeButton } from '@comp';
import challenges from '../data/challenges';

type Props = {};
type State = {};

export default class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onPressChallenge = (name: string) => console.log(name);

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
