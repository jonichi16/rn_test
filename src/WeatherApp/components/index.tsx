import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Weather} from '../models/Weather';
import WeatherComponent from './WeatherComponent';
import Button from '../../common/components/buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spacing, Typography} from '../../common/styles';

const WeatherApp = () => {
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
          location: `${data.location.region}, ${data.location.country}`,
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        onChangeText={setLocation}
        value={location}
        placeholder="Enter City Here"
      />
      <Button title="Get Weather" handlePress={getWeather} />

      {isLoading ? (
        <View style={styles.center}>
          <Text>Loading...</Text>
        </View>
      ) : (
        <WeatherComponent weather={weather} error={error} />
      )}
    </View>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  inputField: {
    width: '100%',
    padding: Spacing.spacing.xs,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: Spacing.spacing.xxs,
    ...Typography.body.md,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
