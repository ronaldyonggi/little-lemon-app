import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.alternativeContainer}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    flex: 0.03
  },
  alternativeContainer: {
    backgroundColor: '#ee9972',
    flex: 0.03
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});
