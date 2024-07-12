import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
   
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}/>
    </Stack.Navigator>


  )
}

export default AppNavigation