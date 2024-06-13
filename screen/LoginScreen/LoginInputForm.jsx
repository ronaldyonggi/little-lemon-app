import { View, Text, Pressable, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function LoginInputForm(props) {
  const onLoginPress = () => {
    props.setLoggedIn(true);
    props.navigation.navigate('Welcome');
  };

  return (
    <View>
      <Text style={styles.regularText}>Login to continue</Text>
      <TextInput
        value={props.email}
        onChange={props.onChangeEmail}
        keyboardType='email-address'
        style={styles.inputField}
        placeholder='email'
      />
      <TextInput
        value={props.password}
        onChange={props.onChangePassword}
        secureTextEntry={true}
        placeholder='password'
        style={styles.inputField}
      />

      <Pressable style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </View>
  );
}
