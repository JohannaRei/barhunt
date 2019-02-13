// @flow
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="lightgrey" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Loader;
