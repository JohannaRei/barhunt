// @flow
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import type { StyleObj } from '@styleObj';
import variables from './styles/variables';

type Props = {
  onChangeText: (text: string, name: string) => void,
  style?: StyleObj,
  name: string,
  value: ?string
};

const TextInput = ({
  onChangeText, style, name, value, ...props
}: Props) => (
  <RNTextInput
    {...props}
    onChangeText={text => onChangeText(name, text)}
    style={[styles.input, style]}
    secureTextEntry={name === 'password'}
    placeholderTextColor={variables.placeholderText}
    autoComplete={name}
    value={value}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: variables.inputBgColor
  }
});

export default TextInput;
