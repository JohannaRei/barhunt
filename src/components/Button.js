// @flow
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Text from './Text';
import i18n from '@lang';

type Props = {
  onPress: () => void,
  title: string
};

const Button = ({ onPress, title }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text>{i18n(title)}</Text>
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
