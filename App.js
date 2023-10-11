import Router from './src/router/Router';
import { Provider } from 'react-redux';
import store from './store'
import { GlobalStylingProvider } from './src/assets/styles/GlobalStylingContext';
import './src/translation/index'
import { AppRegistry, SafeAreaView, StyleSheet } from 'react-native';

function App() {
  AppRegistry.registerComponent('main', () => App);

  return (
    <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <GlobalStylingProvider>
          <Router />
      </GlobalStylingProvider>
      </Provider>
    </SafeAreaView>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});




export default App