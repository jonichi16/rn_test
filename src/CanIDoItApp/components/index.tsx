import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Todo} from '../../TodoApp/models/Todo';
import {Weather} from '../../WeatherApp/models/Weather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MissingPage from './MissingPage';
import Header from './Header';
import {Spacing} from '../../common/styles';
import Card from './Card';

const CanIDoIt = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.multiGet(['todos', 'weather']);
      const todoData = data[0][1] !== null ? JSON.parse(data[0][1]) : [];
      const weatherData = data[1][1] !== null ? JSON.parse(data[1][1]) : null;
      setTodos(todoData);
      setWeather(weatherData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [todos]);

  if (isLoading) {
    return <Text style={styles.container}>Loading...</Text>;
  }

  if (todos.length === 0) {
    return <MissingPage page="Todo" />;
  }

  if (!weather) {
    return <MissingPage page="Weather" />;
  }

  return (
    <View style={styles.container}>
      <Header weather={weather} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item}) => <Card todo={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default CanIDoIt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.spacing.md,
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: Spacing.spacing.lg,
  },
});
