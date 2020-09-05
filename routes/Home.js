import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LogInScreen from '../Components/LoginPage.js';
import SignUpScreen from '../Components/SignUpPage.js';

const screens = {
  LogInScreen: {
    screen: LogInScreen,
  },
  SignUpScreen: {
    screen: SignUpScreen,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);