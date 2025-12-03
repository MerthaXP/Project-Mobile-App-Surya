import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { colors } from '../constants/colors';


import HomeScreen from '../screens/HomeScreen';
import InputScreen from '../screens/InputScreen';
import ListScreen from '../screens/ListScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarActiveTintColor: colors.primary || '#007AFF', 
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Input') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          
          return <Icon name={iconName || 'alert'} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Beranda' }}
      />
      <Tab.Screen 
        name="Input" 
        component={InputScreen} 
        options={{ tabBarLabel: 'Tambah' }}
      />
      <Tab.Screen 
        name="List" 
        component={ListScreen} 
        options={{ tabBarLabel: 'Daftar Barang' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'Akun' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;