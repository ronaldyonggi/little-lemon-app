import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Welcome() {
  const [name, onChangeName] = useState('');
  return (
    <ScrollView style={styles.alternativeContainer} keyboardDismissMode='on-drag'>
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
