import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Keyboard} from 'react-native';
import {Weather} from '../models/Weather';

const useWeather = () => {
  const [location, setLocation] = useState<string>('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string>('Please enter a city.');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeather = async () => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=c8c89f0cbb4e432db7c181806232204&q=${location}/`;
    setIsLoading(true);

    Keyboard.dismiss();

    try {
      const response = await fetch(URL, {mode: 'cors'});
      const data = await response.json();

      if (data.error) {
        setError('No matching city found.');
        setWeather(null);
      } else {
        const newWeather: Weather = {
          tempCelsius: `${data.current.temp_c}°C`,
          condition: data.current.condition.text,
          icon: data.current.condition.icon,
          location: data.location.region,
          country: data.location.country,
        };

        setWeather(newWeather);
        await AsyncStorage.setItem('weather', JSON.stringify(newWeather));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {location, setLocation, weather, error, isLoading, getWeather};
};

export default useWeather;
