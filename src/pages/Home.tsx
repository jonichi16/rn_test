import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';
import {Colors, Spacing, Typography} from '../common/styles';
import Button from '../common/components/Button';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to SandBox</Text>
      <Text style={styles.subheader}>Enjoy different apps</Text>
      <Button
        title={'Go to Todo App'}
        style={styles.button}
        handlePress={() => navigation.navigate('Todo')}
      />
      <Button
        title={'Go to Weather App'}
        style={styles.button}
        handlePress={() => navigation.navigate('Weather')}
      />
      <Button
        title={'Go to Waybill App'}
        style={styles.button}
        handlePress={() => navigation.navigate('Waybill')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.spacing.xs,
  },
  header: {
    ...Typography.header.xxl,
    color: Colors.primary.dark,
  },
  subheader: {
    ...Typography.header.lg,
    color: Colors.primary.dark,
    marginBottom: Spacing.spacing.md,
  },
  button: {
    width: '50%',
  },
});
