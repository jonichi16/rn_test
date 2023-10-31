import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';
import {Colors, Typography} from '../styles';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to SandBox</Text>
      <Text style={styles.subheader}>Enjoy different apps</Text>
      <Pressable
        onPress={() => navigation.navigate('Todo')}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? Colors.primary.p800
              : Colors.primary.p900,
            transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
          },
          styles.btn,
        ]}>
        <Text style={styles.btnText}>Go to Todo App</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Weather')}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? Colors.primary.p800
              : Colors.primary.p900,
            transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
          },
          styles.btn,
        ]}>
        <Text style={styles.btnText}>Go to Weather App</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    ...Typography.header.xxl,
    color: Colors.primary.dark,
  },
  subheader: {
    ...Typography.header.lg,
    color: Colors.primary.dark,
  },
  btn: {
    width: '50%',
    padding: 8,
    borderRadius: 4,
    marginVertical: 12,
  },
  btnText: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
