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
        <BottomTab.Navigator
          tabBarOptions={{
            activeTintColor: '#DB3022',
            inactiveTintColor: '#9b9b9b',
            labelStyle: {
              fontWeight: 'bold',
              fontSize: 12,
            },
          }}>
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={30}
                  color="#DB3022"
                />
              ),
              tabBarLabel: 'Home',
            }}
            name="Home"
            component={HomeStack}
          />
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon
                  name={focused ? 'cart' : 'cart-outline'}
                  size={30}
                  color="#DB3022"
                />
              ),
            }}
            name="Shop"
            component={ShopStack}
          />
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon
                  name={focused ? 'shopping' : 'shopping-outline'}
                  size={30}
                  color="#DB3022"
                />
              ),
            }}
            name="Bag"
            component={BagStack}
          />
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon
                  name={focused ? 'heart' : 'heart-outline'}
                  size={30}
                  color="#DB3022"
                />
              ),
            }}
            name="Favorit"
            component={Mybag}
          />
          <BottomTab.Screen
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Icon
                  name={focused ? 'account' : 'account-outline'}
                  size={30}
                  color="#DB3022"
                />
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
