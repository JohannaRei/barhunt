// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { Screen, Text, TextInput } from '@comp';
import { Button } from 'native-base';

type Props = {
  navigation: any
};
type State = {
  group: string[],
  newMember: string,
  addNew: boolean
};

export default class GroupRegistrationScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      group: [],
      newMember: '',
      addNew: false
    };
  }

  componentDidMount() {
    // get the user's name and add to group
  }

  onChangeText = (newMember: string) => this.setState({ newMember });

  addToGroup = (member: string) => {
    const { group } = this.state;
    const newGroup = [...group, member];
    this.setState({ group: newGroup, newMember: '' });
  };

  onDone = () => {
    const { navigation } = this.props;
    navigation.navigate('home');
  };

  render() {
    const { newMember, addNew } = this.state;
    return (
      <Screen>
        <Text tx="groupRegistrationScreen.title" />
        {!addNew ? (
          <Button onPress={() => this.setState({ addNew: true })}>
            <Text>+</Text>
          </Button>
        ) : (
          <View>
            <TextInput name="newMember" onChangeText={this.onChangeText} value={newMember} />
            <Button onPress={() => this.addToGroup('member')}>
              <Text tx="groupRegistrationScreen.addButton" />
            </Button>
          </View>
        )}
      </Screen>
    );
  }
}
