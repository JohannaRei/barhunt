// @flow
import React, { Component } from 'react';
import {
  Screen, Content, TextInput, Text, Button
} from '@comp';

type Props = {
  navigation: any
};
type State = {
  name: string
};

export default class NameScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onChangeName = (name: string) => this.setState({ name });

  onSubmitName = () => {
    const { navigation } = this.props;
    // submit name logic here
    navigation.navigate('selection');
  };

  render() {
    const { name } = this.state;
    return (
      <Screen>
        <Content>
          <Text>What's your name?</Text>
          <TextInput name="name" onChangeText={this.onChangeName} value={('name', name)} />
          <Button onPress={this.onSubmitName} title="That's me!" />
        </Content>
      </Screen>
    );
  }
}
