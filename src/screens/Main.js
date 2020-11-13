import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useSelector} from 'react-redux';
const BottomTab = createBottomTabNavigator();

import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Home from './Home';
import Mybag from './MyBag';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeStack,BagStack,MyProfileStack} from './StackNavigator'
import Landing from './Landing'

export default function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {!auth.isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={Landing}
          />
        </Stack.Navigator>
      ) : (
        <BottomTab.Navigator>
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="home-outline" size={30} color={color} />
              ),
            }}
            name="Home"
            component={HomeStack}
          />
          <BottomTab.Screen  options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="cart-outline" size={30} color={color} />
              ),
            }} name="Shop" component={Login} />
          <BottomTab.Screen  options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="shopping-outline" size={30} color={color} />
              ),
            }} name="Bag" component={BagStack} />
            <BottomTab.Screen  options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="heart-outline" size={30} color={color} />
              ),
            }} name="Favorit" component={Mybag} />
            <BottomTab.Screen  options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="account-outline" size={30} color={color} />
              ),
            }} name="Profile" component={MyProfileStack} />
        </BottomTab.Navigator>
      )}
    </NavigationContainer>
  );
}
