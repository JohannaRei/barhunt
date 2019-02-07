// @glow
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen }
  },
  {
    initialRouteName: 'home'
  }
);

export default createAppContainer(AppNavigator);
