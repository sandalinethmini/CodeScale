import React from 'react';
import { View, Text } from 'react-native';
import LoginScreen from '../src/screens/LoginScreen'; // Adjust the path accordingly
import SignUpScreen from '@/src/screens/SignUpScreen';
import AppNavigation from '@/src/navigations/AppNavigation';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <AppNavigation/>
    </View>
  );
}

export default App;
