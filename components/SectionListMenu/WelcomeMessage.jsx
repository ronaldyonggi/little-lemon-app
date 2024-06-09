import { Text } from 'react-native';
import { styles } from './styles';

export default function WelcomeMessage() {
  return (
    <Text style={styles.infoSection}>
      Little Lemon is a charming neighborhood bistro that serves simple food and
      classic cocktails in a lively but casual environment. View our menu to
      explore our cuisine with daily specials!
    </Text>
  );
}
