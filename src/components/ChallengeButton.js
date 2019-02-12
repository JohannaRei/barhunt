// @flow
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon, Text } from '@comp';

type Props = {
  data: {
    name: string,
    level: number,
    locked: boolean
  },
  onPress: () => void
};

const ChallengeButton = ({ data: { name, level, locked }, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>{level.toString()}</Text>
      </View>
      {locked && <Icon name="lock" />}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  textContainer: {
    flexDirection: 'column'
  }
});

export default ChallengeButton;
