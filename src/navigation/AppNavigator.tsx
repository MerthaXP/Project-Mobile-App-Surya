import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

// Jika nanti ada screen lain di luar Tab (misal: Login, Splash, DetailBarang)
// Import di sini.
// import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false, // Kita handle header di masing-masing screen jika perlu
      }}
    >
      {/* Main adalah TabNavigator. 
        Jadi ketika aplikasi dibuka, user langsung melihat Tab Menu.
      */}
      <Stack.Screen name="Main" component={TabNavigator} />

      {/* Contoh jika ingin menambahkan halaman detail yang menumpuk di atas Tab:
        <Stack.Screen name="DetailBarang" component={DetailScreen} />
      */}
    </Stack.Navigator>
  );
};

export default AppNavigator;