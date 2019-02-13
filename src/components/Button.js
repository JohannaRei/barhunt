// @flow
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Text from './Text';

type Props = {
  onPress: () => void,
  title: string
};

const Button = ({ onPress, title }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 60,
    backgroundColor: 'red'
  }
});

export default Button;
