// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Screen, TextInput, Text } from '@comp';
import { Button } from 'native-base';

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
        <View style={styles.nameTag}>
          <Text tx="nameScreen.title" />
          <TextInput name="name" onChangeText={this.onChangeName} value={('name', name)} />
        </View>
        <Button style={styles.button} onPress={this.onSubmitName} disabled={name.length < 3}>
          <Text tx="nameScreen.button" />
        </Button>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  nameTag: {
    position: 'absolute',
    right: 10,
    top: 200,
    height: 100,
    width: 200,
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    top: 100,
    left: 50
  }
});
