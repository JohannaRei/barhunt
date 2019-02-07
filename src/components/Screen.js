// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { StyleObj } from '@styleObj';

type Props = {
  children: any,
  style?: StyleObj
};

const Screen = ({ children, style }: Props) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Screen;
