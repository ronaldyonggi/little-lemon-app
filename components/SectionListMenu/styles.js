import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333333',
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});
