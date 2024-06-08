import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { scrollViewMenu as menuItemsToDisplay } from '../menu/scrollViewMenu';

export default function scrollViewMenu() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} indicatorStyle='white'>
        <Text style={styles.header}>View Menu</Text>

        <Text style={styles.menuItems}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.87
  },
  scrollView: {
    padding: 40,
    backgroundColor: 'black',
  },
  header: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
  },
  menuItems: {
    color: '#F4Ce14',
    fontSize: 36,
  },
});
