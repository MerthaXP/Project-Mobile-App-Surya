import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Mengatur warna status bar agar sesuai tema */}
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        
        {/* Memanggil Navigator Utama */}
        <AppNavigator />
        
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;