import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServiceType from './service-type/ServiceType';

const Tab = createBottomTabNavigator();

const Waybill = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ServiceType"
        component={ServiceType}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Waybill;
