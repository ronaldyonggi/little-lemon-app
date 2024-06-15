import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screen/LoginScreen'
import WelcomeScreen from '../screen/WelcomeScreen'
import Footer from './Footer'
import Logo from './Logo'

const Stack = createNativeStackNavigator()

export default function StackNavigation({ isLightTheme, darkModeHeaderStyle, lightModeHeaderStyle, styles }) {
  return (
    <NavigationContainer style={styles.container}>
      {/* <Header /> */}
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={isLightTheme ? lightModeHeaderStyle : darkModeHeaderStyle}
      >
        <Stack.Screen name='Login' component={LoginScreen} isLightTheme={isLightTheme} options={{
          headerTitle: (props) => <Logo style={styles.logo} {...props} />
        }} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} isLightTheme={isLightTheme} />
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
  )
}
