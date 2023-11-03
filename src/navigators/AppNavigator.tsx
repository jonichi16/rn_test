import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from '../common/styles';
import Home from '../pages/Home';
import TodoApp from '../TodoApp/components';
import WeatherApp from '../WeatherApp/components';

export type RootStackParamList = {
  Home: undefined;
  Todo: undefined;
  Weather: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
