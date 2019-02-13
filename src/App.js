// @flow
import React, { Component } from 'react';
import * as RNLocalize from 'react-native-localize';
import firebase from 'react-native-firebase';
import { setI18nConfig } from '@lang';
import { RegistrationContainer, LoginContainer } from '@navi';
import { Loader } from '@comp';
import { SECRET } from 'react-native-dotenv';

type Props = {};
type State = {
  user: ?{
    name: string
  },
  loading: boolean
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    setI18nConfig();
    this.state = {
      loading: true,
      user: null
    };
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user, loading: false });
    });
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  render() {
    const { loading, user } = this.state;
    if (loading) {
      return <Loader />;
    }
    if (user) {
      return <LoginContainer />;
    }
    return <RegistrationContainer />;
  }
}
