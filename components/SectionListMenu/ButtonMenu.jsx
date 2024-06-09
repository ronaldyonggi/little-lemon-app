import { Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function ButtonMenu({ showMenu, setShowMenu }) {
  return (
    <Pressable style={styles.button} onPress={() => setShowMenu(prevState => !prevState)}>
        <Text style={styles.buttonText}>
            {showMenu ? 'Home' : 'View Menu'}
        </Text>
    </Pressable>
  )
}