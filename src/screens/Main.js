import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';
const BottomTab = createBottomTabNavigator();

import ResetPassword from './ResetPassword';
import Mybag from './MyBag';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeStack, BagStack, MyProfileStack, ShopStack} from './StackNavigator';

const Stack = createStackNavigator();

export default function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {!auth.isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={ResetPassword}
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
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="cart-outline" size={30} color={color} />
              ),
            }}
            name="Shop"
            component={ShopStack}
          />
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="shopping-outline" size={30} color={color} />
              ),
            }}
            name="Bag"
            component={BagStack}
          />
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="heart-outline" size={30} color={color} />
              ),
            }}
            name="Favorit"
            component={Mybag}
          />
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon name="account-outline" size={30} color={color} />
              ),
            }}
            name="Profile"
            component={MyProfileStack}
          />
        </BottomTab.Navigator>
      )}
    </NavigationContainer>
  );
}
