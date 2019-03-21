// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Screen, Content, Text, TextInput, Button
} from '@comp';

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
        <Content>
          <Text>Add group members</Text>
          {!addNew ? (
            <Button title="+" onPress={() => this.setState({ addNew: true })} />
          ) : (
            <View>
              <TextInput name="newMember" onChangeText={this.onChangeText} value={newMember} />
              <Button title="add" onPress={() => this.addToGroup('member')} />
            </View>
          )}
        </Content>
      </Screen>
    );
  }
}
