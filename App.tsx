import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import {StatusBar} from 'react-native';
import {Colors} from './src/common/styles';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary.p900} />
      <AppNavigator />
    </>
  );
};

export default App;
