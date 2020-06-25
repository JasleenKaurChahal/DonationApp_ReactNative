import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {scale} from 'react-native-size-matters';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './screens/login';
import SignIn from './screens/signIn';
import SignUp from './screens/signUp';
import Donate from './screens/donate';
import Profile from './screens/profile';
import Entypo from 'react-native-vector-icons/Entypo';

const Tabs = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Entypo name="user" size={scale(22)} color={tintColor} />
        ),
      },
    },
    Donate: {
      screen: Donate,
      navigationOptions: {
        tabBarLabel: 'Donate',
        tabBarIcon: ({tintColor}) => (
          <Entypo name="inbox" size={scale(22)} color={tintColor} />
        ),
      },
    },
    NgoList: {
      screen: Donate,
      navigationOptions: {
        tabBarLabel: 'Ngo List',
        tabBarIcon: ({tintColor}) => (
          <Entypo name="bar-graph" size={scale(22)} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Profile',
    tabBarOptions: {
      activeTintColor: '#FF7B7B',
      inactiveTintColor: '#424949',
      activeBackgroundColor: 'white',
      labelStyle: {fontSize: 14},
      style: {height: 50},
    },
  },
);

const AuthStack = createSwitchNavigator(
  {
    SignIn: {screen: SignIn},
    SignUp: {screen: SignUp},
    Login: {screen: Login},
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthStack: AuthStack,
      Tabs: Tabs,
    },

    {
      initialRouteName: 'AuthStack',
    },
  ),
);
