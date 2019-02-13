// @flow
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import type { StyleObj } from '@styleObj';
import i18n from '@lang';

type Props = {
  children?: string,
  style?: StyleObj,
  tx?: ?string
};

const Text = ({ children, style, tx }: Props) => (
  <RNText style={[styles.text, style]}>{tx ? i18n(tx) : children}</RNText>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
});

export default Text;
