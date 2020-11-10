import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Header from '../Components/Header'

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ]

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container}>
      <Card containerStyle={{padding: 0}} >
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
