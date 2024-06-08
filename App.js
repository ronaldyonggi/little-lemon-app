import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';
import FlatListMenu from './components/FlatListMenu';
import SectionListMenu from './components/SectionListMenu';
import SectionListMenuWithPrice from './components/SectionListMenuWithPrice';

export default function App() {
  return (
    <View style={styles.alternativeContainer}>
      <Header />
      {/* <Welcome /> */}
      {/* <FlatListMenu /> */}
      {/* <Footer /> */}
      {/* <SectionListMenu /> */}
      <SectionListMenuWithPrice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#495e57',
  },
  alternativeContainer: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#333333',
  },
});
