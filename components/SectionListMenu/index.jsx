import { View, Text, SectionList } from 'react-native';
import { sectionListMenu } from '../../menu/sectionListMenu';
import { useState } from 'react';
import { styles } from './styles';
import WelcomeMessage from './WelcomeMessage';
import ButtonMenu from './ButtonMenu';
import Menu from './Menu';
import { Footer } from './Footer';
import { Separator } from './Separator';
import { Item } from './Item';

export default function SectionListMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const renderItem = ({ item }) => <Item name={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      {!showMenu && <WelcomeMessage />}

      <ButtonMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && (
        <Menu
          sections={sectionListMenu}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}
        />
      )}
    </View>
  );
}
