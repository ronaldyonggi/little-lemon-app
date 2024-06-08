import { View, Text, StyleSheet, FlatList } from 'react-native';
import { flatListMenu } from '../menu/flatListMenu';

const Item = ({ name, price }) => {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{price}</Text>
    </View>
  );
};

const Header = () => <Text style={styles.headerText}>View Menu</Text>;

const Separator = () => <View style={styles.separator} />;

export default function FlatListMenu() {
  return (
    <View style={styles.container}>
      <FlatList
        data={flatListMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item name={item.name} price={item.price} />}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
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
    backgroundColor: '#333333',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 25,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#edefee',
  },
});
