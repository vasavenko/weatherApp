import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Получение погоды...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: '#FDF6AA',
  },
  text: {
    fontSize: 30,
    color: '#2c2c2c',
  },
});
