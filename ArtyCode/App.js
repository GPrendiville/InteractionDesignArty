import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from './Pages/HomePage'
import ExplorePage from './Pages/ExplorePage'
import ActivityPage from './Pages/ActivityPage'
import ProfilePage from './Pages/ProfilePage'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  
        barStyle={{ backgroundColor: '#000000' }}
      >
        <Tab.Screen 
        name="Home" 
        component={HomePage} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}/>
        <Tab.Screen 
        name="Explore" 
        component={ExplorePage} 
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          )
        }}/>
        <Tab.Screen 
        name="Activity" 
        component={ActivityPage} 
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          )
        }}/>
        <Tab.Screen 
        name="Profile" 
        component={ProfilePage} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
