/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import TodoApp from './src/TodoApp/components';
import WeatherApp from './src/WeatherApp/components';
import {Colors} from './src/common/styles';
import Waybill from './src/Waybill/components';

export type RootStackParamList = {
  Home: undefined;
  Todo: undefined;
  Weather: undefined;
  Waybill: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary.p900,
          },
          headerTintColor: Colors.primary.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
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
        <Stack.Screen
          name="Waybill"
          component={Waybill}
          options={{title: 'Waybill'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
