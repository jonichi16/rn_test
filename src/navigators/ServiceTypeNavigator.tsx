import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ServiceType from '../Waybill/components/service-type';
import AddServiceType from '../Waybill/components/service-type/AddServiceType';

export type ServiceTypeStackParamList = {
  ServiceType: undefined;
  Add: undefined;
};

const Stack = createNativeStackNavigator<ServiceTypeStackParamList>();

const ServiceTypeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ServiceType"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ServiceType" component={ServiceType} />
      <Stack.Screen name="Add" component={AddServiceType} />
    </Stack.Navigator>
  );
};

export default ServiceTypeNavigator;
