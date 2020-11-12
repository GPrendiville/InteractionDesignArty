import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Page</Text>
      </View>
    </SafeAreaView>
  )
}

export default function ProfilePage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore Page"
        component={ProfileScreen}
        options={{
          title: 'Arty', headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
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