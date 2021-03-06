import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import MyBag from './MyBag';
import CheckOut from './CheckOut';
import ShippingAdress from './ShippingAdress';
import MyProfile from './MyProfile';
import MyOrder from './MyOrders';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';
import OrderDetails from './OrderDetils';
import ChangeAdress from './ChangeAdress';
import AddAdress from './AddAdress';
import OrderSucces from './SuccessOrder';
import Category from './Category';
import ListCategory from './ListCategory';
import Filters from './Filters';
import ProductDetails from './ProductDetails';
import {Button, Text} from 'native-base';

const Stack = createStackNavigator();

export const ProductDetailsStacck = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductDetails"
        options={({route}) => ({
          title: 'Short dress',
          headerTitleAlign: 'center',
          headerRight:()=>(
            <Icon name="share" size={25} style={{marginRight:16}} />
          )
        })}
        component={ProductDetails}
      />
    </Stack.Navigator>
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
      <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetails"
        component={ProductDetailsStacck}
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
      <Stack.Screen
        name="Success"
        options={{headerShown: false}}
        component={OrderSucces}
      />
    </Stack.Navigator>
  );
};

export const MyOrdersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Myorders"
        options={{
          headerShown: true,
          headerTitle: null,
          headerStyle: {elevation: 0, backgroundColor: '#f5f5f5'},
          headerRight: () => (
            <Icon name="search" size={30} style={{marginRight: 10}} />
          ),
        }}
        component={MyOrder}
      />
      <Stack.Screen
        name="OrderDetails"
        options={{
          headerShown: true,
          headerTitle: 'Order Details',
          headerTitleAlign: 'center',
          headerStyle: {elevation: 2, backgroundColor: '#FFFFFF'},
          headerRight: () => (
            <Icon name="search" size={30} style={{marginRight: 10}} />
          ),
        }}
        component={OrderDetails}
      />
    </Stack.Navigator>
  );
};

export const AdressStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileAdress"
        options={{headerTitle: 'Shipping Adress', headerTitleAlign: 'center'}}
        component={ShippingAdress}
      />
      <Stack.Screen
        name="ChangeAdress"
        options={{
          headerTitle: 'Change adress',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'white'},
        }}
        component={ChangeAdress}
      />
      <Stack.Screen
        name="AddAdress"
        options={{headerTitleAlign: 'center', title: 'Adding Shipping Adress'}}
        component={AddAdress}
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
      <Stack.Screen
        name="Myorders"
        options={{
          headerShown: false,
        }}
        component={MyOrdersStack}
      />
      <Stack.Screen
        name="ProfileAdress"
        options={{headerShown: false}}
        component={AdressStack}
      />

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
  );
};

export const FiltersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filters"
        options={{title: 'Filters', headerTitleAlign: 'center'}}
        component={Filters}
      />
    </Stack.Navigator>
  );
};

export const ShopStack = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        options={{
          title: 'Categories',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon name="search" size={30} style={{marginRight: 10}} />
          ),
        }}
        component={Category}
      />
      <Stack.Screen
        name="ListCategory"
        options={({route}) => ({
          title: route.params.title,
          headerTitleAlign: 'center',
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <Icon name="search" size={30} style={{marginRight: 10}} />
          ),
        })}
        component={ListCategory}
      />
      <Stack.Screen
        name="Filters"
        options={{headerShown: false}}
        component={FiltersStack}
      />
    </Stack.Navigator>
  );
};
