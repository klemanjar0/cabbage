import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import applicationStore from './src/services/redux';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={applicationStore}>
      <View accessibilityLabel="App_Root">
        <Text>Open up App.tsx to start working on your app!</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
