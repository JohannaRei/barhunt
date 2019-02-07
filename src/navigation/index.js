// @flow
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, SplashScreen } from '@main';
import { RegistrationScreen } from '@register';

const AppNavigator = createStackNavigator(
  {
    splash: { screen: SplashScreen },
    home: { screen: HomeScreen },
    register: { screen: RegistrationScreen }
  },
  {
    initialRouteName: 'home'
  }
);

export default createAppContainer(AppNavigator);
