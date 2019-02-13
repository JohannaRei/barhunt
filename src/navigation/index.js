// @flow
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, SplashScreen } from '@main';
import { RegistrationScreen, LoginScreen } from '@register';

const RegistrationNavigator = createStackNavigator(
  {
    splash: { screen: SplashScreen },
    home: { screen: HomeScreen },
    register: { screen: RegistrationScreen }
  },
  {
    initialRouteName: 'register',
    headerMode: 'none'
  }
);

const LoginNavigator = createStackNavigator(
  {
    splash: { screen: SplashScreen },
    login: { screen: LoginScreen },
    home: { screen: HomeScreen }
  },
  { initialRouteName: 'login', headerMode: 'none' }
);

const RegistrationContainer = createAppContainer(RegistrationNavigator);
const LoginContainer = createAppContainer(LoginNavigator);

export { RegistrationContainer, LoginContainer };
