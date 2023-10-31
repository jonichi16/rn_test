/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import TodoApp from './src/TodoApp/components';
import WeatherApp from './src/WeatherApp/components';

export type RootStackParamList = {
  Home: undefined;
  Todo: undefined;
  Weather: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Todo"
          component={TodoApp}
          options={{title: 'Todo App'}}
        />
        <Stack.Screen
          name="Weather"
          component={WeatherApp}
          options={{title: 'Weather App'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
