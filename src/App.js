// @flow
import React, { Component } from 'react';
import * as RNLocalize from 'react-native-localize';
import { setI18nConfig } from '@languages';
import AppContainer from '@navi';

export default class App extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  render() {
    return <View />;
  }
}
