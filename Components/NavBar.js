import React, { Component } from 'react';
import LogInScreen from '../Components/LoginPage.js';
import SignUpScreen from '../Components/SignUpPage.js';
import {Router, Stack, Scene} from 'react-native-router-flux';

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="Login" component={LogInScreen} title="Login" initial={true}/>
          <Scene key="Signup" component={SignUpScreen} title="Signup"/>
        </Stack>
      </Router>
      
    );
  }
}