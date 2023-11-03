import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type TabIconProps = {
  iconName: string;
  color: string;
  size: number;
};

const TabIcon = ({iconName, color, size}: TabIconProps) => {
  return (
    <Image
      source={require(`../../assets/images/todo.png`)}
      style={{width: size, height: size, tintColor: color}}
    />
  );
};

export default TabIcon;

const styles = StyleSheet.create({});
