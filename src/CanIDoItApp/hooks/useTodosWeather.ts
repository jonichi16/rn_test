import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Todo} from '../../TodoApp/models/Todo';
import {Weather} from '../../WeatherApp/models/Weather';

const useTodosWeather = () => {
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

  return {todos, weather, isLoading};
};

export default useTodosWeather;
