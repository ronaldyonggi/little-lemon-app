import { View, Text, StyleSheet, FlatList } from 'react-native';
import { flatListMenu } from '../menu/flatListMenu';

const Item = ({ name }) => {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

export default function FlatListMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>View Menu</Text>
      <FlatList 
        data={flatListMenu}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item name={item.name}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36,
  },
});
