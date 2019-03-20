// @flow
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, SplashScreen } from '@main';
import { RegistrationScreen, SigninScreen, AuthScreen } from '@auth';
import { ChallengeStartScreen, LocationClueScreen } from '@chal';
import { StartScreen, NameScreen } from '@onboard';

const OnboardingNavigator = createStackNavigator(
  {
    start: { screen: StartScreen },
    name: { screen: NameScreen }
  },
  { initialRouteName: 'start', headerMode: 'none' }
);

const AuthNavigator = createStackNavigator(
  {
    splash: { screen: SplashScreen },
    auth: { screen: AuthScreen },
    register: { screen: RegistrationScreen },
    signin: { screen: SigninScreen }
  },
  {
    initialRouteName: 'auth',
    headerMode: 'none'
  }
);

const AppNavigator = createStackNavigator(
  {
    splash: { screen: SplashScreen },
    home: { screen: HomeScreen },
    challengeStart: { screen: ChallengeStartScreen },
    locationClue: { screen: LocationClueScreen }
  },
  { initialRouteName: 'home', headerMode: 'none' }
);

const OnboardingContainer = createAppContainer(OnboardingNavigator);
const AuthContainer = createAppContainer(AuthNavigator);
const AppContainer = createAppContainer(AppNavigator);

export { OnboardingContainer, AuthContainer, AppContainer };
