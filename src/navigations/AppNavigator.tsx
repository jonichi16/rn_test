import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TodoApp from '../TodoApp/components';
import WeatherApp from '../WeatherApp/components';
import TabIcon from '../common/components/tab-icons/TabIcon';
import CanIDoIt from '../CanIDoItApp/components';
import {Colors, Themes} from '../common/styles';

export type RootTabParamList = {
  Todo: undefined;
  Weather: undefined;
  CanIDoIt: undefined;
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const scheme = useColorScheme();

  const setTabIcon = (iconName: string, color: string, size: number) => {
    return <TabIcon iconName={iconName} color={color} size={size} />;
  };

  return (
    <NavigationContainer
      theme={scheme === 'dark' ? Themes.darkTheme : Themes.lightTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => setTabIcon(route.name, color, size),
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.primary.light,
          },
        })}>
        <Tab.Screen name="Todo" component={TodoApp} options={{title: 'Todo'}} />
        <Tab.Screen
          name="Weather"
          component={WeatherApp}
          options={{title: 'Weather'}}
        />
        <Tab.Screen
          name="CanIDoIt"
          component={CanIDoIt}
          options={{title: 'Can I Do It?'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
