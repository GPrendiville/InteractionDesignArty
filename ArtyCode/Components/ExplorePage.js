import * as React from 'react';
import {useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { Card, ListItem, Button, Icon , SearchBar} from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostPage from './PostPage'

const Stack = createStackNavigator();

function ExploreScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Explore Page</Text>
      </View>
    </SafeAreaView>
  )
}

export default function ExplorePage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore Page"
        component={ExploreScreen}
        options={{
          title: 'Arty', headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerRight: () => (
            <Button
              onPress={() => navigate(PostPage)}
              type='clear'
              icon={<MaterialCommunityIcons name="plus" color="white" size={30} />}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 1
  },
});