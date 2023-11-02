import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spacing} from '../../../common/styles';

const ServiceType = () => {
  return (
    <View style={styles.container}>
      <Text>ServiceType</Text>
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
});
