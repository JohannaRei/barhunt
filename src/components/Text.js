import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { StyleObj } from '@styleObj';

type Props = {
  children: string,
  style: StyleObj
};

const Text = ({ children, style }: Props) => (
  <RNText style={[styles.text, style]}>{children}</RNText>
);

const styles = StyleSheet.create({
  text: {
    size: 16
  }
});

export default Text;
