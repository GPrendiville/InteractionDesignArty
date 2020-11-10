import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../Components/Header'

export default function ProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Header />
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Page</Text>
    </View>
    </SafeAreaView>
  )
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
