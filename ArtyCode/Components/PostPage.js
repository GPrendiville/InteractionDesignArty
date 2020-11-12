import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PostPage() {
  return (
    <View style={styles.container}>
      <Text>Posting Page with a form for creating posts</Text>
    </View>
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
