// @flow
import React, { Component } from 'react';
import * as RNLocalize from 'react-native-localize';
import { setI18nConfig } from '@lang';
import AppContainer from '@navi';
import { SECRET } from 'react-native-dotenv';

type Props = {};

export default class App extends Component<Props> {
  constructor(props: Props) {
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
    console.log(SECRET);
    return <AppContainer />;
  }
}
