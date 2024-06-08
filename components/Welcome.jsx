import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Welcome() {
  const [name, onChangeName] = useState('');
  return (
    <ScrollView style={styles.alternativeContainer}>
      <Text style={styles.heading}>Welcome to Little Lemon</Text>
      <Text style={styles.subheading}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        value={name}
        onChange={onChangeName}
        placeholder='First name'
        style={styles.nameInput}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495e57',
  },
  alternativeContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    padding: 40,
  },
  subheading: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
    marginVertical: 8,
  },
  nameInput: {
    backgroundColor: '#eceaea',
    fontSize: 30,
    marginHorizontal: 15,
    padding: 15,
  },
});
