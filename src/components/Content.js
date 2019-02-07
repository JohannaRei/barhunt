import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyleObj } from '@styleObj';
import variables from './styles/variables';

type Props = {
  children: any,
  style?: StyleObj,
  header?: boolean
};

const Content = ({ children, style, header }: Props) => (
  <View style={[styles.container, style, header && styles.header]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    top: variables.headerHeight
  }
});

export default Content;
