import {StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Menu: undefined;
  'Todo App': undefined;
};

const MenuButton = (title: string) => {
  return (
    <>
      <Pressable
        onPress={() => console.log('Menu')}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#1e293b' : '#0f172a',
            transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
          },
          styles.btn,
        ]}>
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
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
