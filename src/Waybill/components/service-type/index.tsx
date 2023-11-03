import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spacing} from '../../../common/styles';
import Button from '../../../common/components/buttons/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ServiceTypeStackParamList} from '../../../navigators/ServiceTypeNavigator';

export type ServiceTypeProps = NativeStackScreenProps<
  ServiceTypeStackParamList,
  'ServiceType'
>;

const ServiceType = ({navigation}: ServiceTypeProps) => {
  return (
    <View style={styles.container}>
      <Text>ServiceType</Text>
      <Button
        testId="AddNewService"
        title="Add new Service Type"
        style={styles.button}
        handlePress={() => navigation.navigate('Add')}
      />
    </View>
  );
};

export default ServiceType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.spacing.xs,
  },
  button: {
    width: '100%',
  },
});
