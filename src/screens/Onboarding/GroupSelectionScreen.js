// @flow
import React, { Component } from 'react';
import {
  View, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import { Screen, Text, Icon } from '@comp';
import { Button, Header, Left } from 'native-base';

type Props = {
  navigation: any
};

export default class GroupSelectionScreen extends Component<Props> {
  onPressButton = (type: string) => {
    const { navigation } = this.props;
    if (type === 'solo') {
      // register team to mst
    }
    navigation.navigate(type);
  };

  render() {
    const { navigation } = this.props;
    return (
      <Screen>
        <Header transparent>
          <Left>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Icon name="arrow-back" />
            </TouchableOpacity>
          </Left>
        </Header>
        <Text tx="groupSelectionScreen.title" />
        <View style={styles.container}>
          <Button onPress={() => this.onPressButton('home')}>
            <Text tx="groupSelectionScreen.solo" />
          </Button>
          <Button onPress={() => this.onPressButton('group')}>
            <Text tx="groupSelectionScreen.group" />
          </Button>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: Dimensions.get('window').height - 150
  }
});
