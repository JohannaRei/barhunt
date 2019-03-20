// @flow
import React, { Component } from 'react';
import { Screen, Content, Text } from '@comp';

type Props = {};
type State = {};

export default class LocationClueScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Screen>
        <Content>
          <Text>LocationClue</Text>
        </Content>
      </Screen>
    );
  }
}
