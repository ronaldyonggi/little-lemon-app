import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';
import FlatListMenu from './components/FlatListMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Welcome /> */}
      <FlatListMenu />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#495e57',
  },
});
