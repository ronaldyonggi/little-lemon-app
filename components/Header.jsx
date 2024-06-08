import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        Little Lemon
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F4CE14',
  },
  text: {
    paddingTop: 30,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
