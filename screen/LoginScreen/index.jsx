import { Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import LoginInputForm from './LoginInputForm';
import { styles } from './styles';

export default function LoginScreen({ isLightTheme }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const backgroundColorTheme = {
    backgroundColor: isLightTheme ? 'white' : '#333333'
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, backgroundColorTheme]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView keyboardDismissMode='on-drag'>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        {!loggedIn ? (
          <LoginInputForm
            email={email}
            onChangeEmail={onChangeEmail}
            password={password}
            onChangePassword={onChangePassword}
            setLoggedIn={setLoggedIn}
          />
        ) : (
          <Text style={styles.regularText}>You are logged in!</Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
