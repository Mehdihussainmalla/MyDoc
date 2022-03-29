import {View, Text} from 'react-native';
import React from 'react';
import Home from '../../screens/Home/Home';
import Cart from '../../screens/card/Cart';
import Profile from '../../screens/Profile/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import Footer from './Footer';
import Banner from '../../screens/Banner/Banner';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import NavigationUsingdrawer from '../drawerpart';
import Header from '../Header';


const Stacks = createStackNavigator();

const Stack = () => {
  return (
      <Stacks.Navigator initialRouteName="Drawer">

        <Stacks.Screen
          name="Drawer"
          component={NavigationUsingdrawer}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Footer"
          component={Footer}
          options={{headerShown: false}}
        />

        <Stacks.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stacks.Screen
          name="Banner"
          component={Banner}
          options={{headerShown: false}}
        />

        <Stacks.Screen name='Header' component={Header} options={{headerShown:false}}/>
      </Stacks.Navigator>
  );
};

export default Stack;
