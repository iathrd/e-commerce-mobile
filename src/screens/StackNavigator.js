import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import MyBag from './MyBag';
import CheckOut from './CheckOut';
import ShippingAdress from './ShippingAdress';
import MyProfile from './MyProfile';
import MyOrder from './MyOrders'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings'
import {Button, Text} from 'native-base';

const Stack = createStackNavigator();

const customHeader = (props) => {
  return (
    <View>
      <Icon name="home" size={20} />
    </View>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: null,
          headerStyle: {elevation: 0, backgroundColor: '#f5f5f5'},
          headerRight: () => (
            <Icon name="search" size={30} style={{marginRight: 10}} />
          ),
        }}
        name="Bag"
        component={MyBag}
      />
      <Stack.Screen
        name="CheckOut"
        options={{headerTitle: 'Checkout', headerTitleAlign: 'center'}}
        component={CheckOut}
      />
      <Stack.Screen
        name="ChangeAdress"
        options={{headerTitle: 'Shipping Adress', headerTitleAlign: 'center'}}
        component={ShippingAdress}
      />
    </Stack.Navigator>
  );
};

export const MyProfileStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen
      name="myProfile"
      options={{
        headerShown: true,
        headerTitle: null,
        headerStyle: {elevation: 0, backgroundColor: '#f5f5f5'},
        headerRight: () => (
          <Icon name="search" size={30} style={{marginRight: 10}} />
        ),
      }}
      component={MyProfile}
    />
    <Stack.Screen name="Myorders"  options={{
        headerShown: true,
        headerTitle: null,
        headerStyle: {elevation: 0, backgroundColor: '#f5f5f5'},
        headerRight: () => (
          <Icon name="search" size={30} style={{marginRight: 10}} />
        ),
      }} component={MyOrder}/>
      <Stack.Screen name="ProfileAdress"  options={{headerTitle: 'Shipping Adress', headerTitleAlign: 'center'}} component={ShippingAdress}/>
      
      <Stack.Screen
  name="Settings"
  options={{
    headerShown: true,
    headerTitle: null,
    headerStyle: {elevation: 0, backgroundColor: '#f5f5f5'},
    headerRight: () => (
      <Icon name="search" size={30} style={{marginRight: 10}} />
    ),
  }}
  component={Settings}
/>
  </Stack.Navigator>
  
  
  )
};
