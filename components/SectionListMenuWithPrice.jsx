import { View, Text, StyleSheet, SectionList } from 'react-native';
import { sectionListMenuWithPrice } from '../menu/sectionListMenuWithPrice';

const Separator = () => <View style={styles.separator} />;

const Footer = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
  </View>
);

const Item = ({ item }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{item.name}</Text>
    <Text style={styles.itemText}>{item.price}</Text>
  </View>
);

export default function SectionListMenuWithPrice() {
  const renderItem = ({ item }) => <Item item={item} />;
  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={sectionListMenuWithPrice}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333333',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    backgroundColor: '#f4ce14',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: 'black',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  footerContainer: {
    backgroundColor: '#ee9972',
  },
});
