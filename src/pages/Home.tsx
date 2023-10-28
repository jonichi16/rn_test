/**
 * @format
 */

import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  'Todo App': undefined;
};

const Home = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to SandBox</Text>
      <Text style={styles.h2}>Enjoy differents apps</Text>
      <Button
        title="Go to Todo App"
        onPress={() => navigation.navigate('Todo App')}
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
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
  },
  h2: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
});
