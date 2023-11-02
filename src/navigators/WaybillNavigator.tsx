import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServiceType from '../Waybill/components';

export type TabParamList = {
  ServiceType: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

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
