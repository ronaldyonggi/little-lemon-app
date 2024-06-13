import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import FlatListMenu from './components/FlatListMenu';
import SectionListMenu from './components/SectionListMenu';
import SectionListMenuWithPrice from './components/SectionListMenuWithPrice';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './screen/LoginScreen';
import WelcomeWithImage from './components/WelcomeWithImage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.alternativeContainer}>
      <Header />
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        {/* <Welcome /> */}
        {/* <FlatListMenu /> */}
        {/* <SectionListMenu /> */}
        {/* <SectionListMenuWithPrice /> */}
        {/* <FeedbackForm /> */}
        {/* <LoginScreen /> */}
        {/* <WelcomeWithImage /> */}
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
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
