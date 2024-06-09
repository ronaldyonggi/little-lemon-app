import { Text, View } from "react-native";
import { styles } from "./styles";

export const Item = ({ name }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
  </View>
);