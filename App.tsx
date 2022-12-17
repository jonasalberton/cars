import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/colors';
import { Home } from './src/views/Home';

export default function App() {
  return (
    <>
      <View style={styles.header}/>
      <View style={styles.container}>
        <Home />
      <StatusBar style="light" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    color: colors.darkest,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: colors.black,
    width: '100%',
    height: 50
  }
});
