/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StatusBar,
} from 'react-native';

import SearchPage from './pages/Search';




const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <SearchPage />
    </>
  );
};



export default App;
