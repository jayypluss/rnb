/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import AppStack from './src/routes/AppStack';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import { store } from './src/reducer/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppStack />
      <StatusBar
        backgroundColor={'#d6283a'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
    </Provider>
  );
};

export default App;
