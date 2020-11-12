import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostPage from './PostPage'

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={styles.container}>
        <Card containerStyle={{ padding: 0 }} >
          {
            users.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  leftAvatar={{ source: { uri: u.avatar } }}
                />
              );
            })
          }
        </Card>
      </View>
    </SafeAreaView>
  );
}

export default function HomePage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
