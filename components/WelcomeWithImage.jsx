import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function WelcomeWithImage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/yh3S-4LcQXGO99idg4HpPg_92f701034da44942a42fee3e878fc1a1_LIttle-Lemon-Logo.png?expiry=1718064000000&hmac=TUtn3yEydnPTV2AQVTCcmdgYjSZTsDGk-QZivKPLziI',
        }}
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    resizeMode: 'contain',
    // borderWidth: 2,
    // borderColor: 'red'
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
