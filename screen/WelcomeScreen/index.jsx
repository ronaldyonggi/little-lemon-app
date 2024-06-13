import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme()
  const isLightTheme = colorScheme === "light"
  const [name, onChangeName] = useState('');

  const backgroundColorTheme = {
    backgroundColor : isLightTheme ? "white" : "#495e57"
  }

  const textColorTheme = {
    color: isLightTheme ? "black" : "white"
  }

  return (
    <ScrollView
      style={[styles.container, backgroundColorTheme]}
      keyboardDismissMode='on-drag'
    >
      <View style={styles.heading}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/l3LRmnWpSFSDyuylevA5rA_6621941b83554dbc8d73f47599f91ba1_Image-1.png?expiry=1718150400000&hmac=FHFlR6ZRG0Smf1_eS6KKYBrb43ZcU4Q5KeU3s9U8FBo',
          }}
        />
        <View style={styles.headerTextView}>
          <Text style={[styles.headerText, textColorTheme]}>Little Lemon</Text>
        </View>
      </View>
      <Text style={[styles.description, textColorTheme]}>
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
