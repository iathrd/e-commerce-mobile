import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {useSelector} from 'react-redux'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import Home from './Home'
export default function App() {
    const auth = useSelector(state=>state.auth)
  return (
    <NavigationContainer>
        {!auth.isLogin ? (
            <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Login" component={Home}/>
        </Stack.Navigator>
        ):""}
    </NavigationContainer>
  )
}
