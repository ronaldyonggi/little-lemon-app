import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495e57',
  },
  alternativeContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    color: 'white',
    fontSize: 35,
  },
  description: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
    marginVertical: 8,
  },
  nameInput: {
    backgroundColor: '#eceaea',
    fontSize: 30,
    marginHorizontal: 15,
    padding: 15,
  },
  logo: {
    height: 100,
    width: 100,
  },
  heading: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15 
  },
  headerTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
