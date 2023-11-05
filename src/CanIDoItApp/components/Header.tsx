import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Weather} from '../../WeatherApp/models/Weather';
import {Todo} from '../../TodoApp/models/Todo';

type HeaderProps = {
  weather: Weather;
  todos: Todo[];
};

const Header = ({weather, todos}: HeaderProps) => {
  const {tempCelsius, condition, icon, location} = weather;

  return (
    <View>
      <Text>{location}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
