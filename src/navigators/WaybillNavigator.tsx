import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServiceTypeNavigator from './ServiceTypeNavigator';

export type TabParamList = {
  ServiceTypeNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const Waybill = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ServiceTypeNavigator"
        component={ServiceTypeNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Waybill;
