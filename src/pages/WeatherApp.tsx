import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../styles';
import {Weather} from '../models/weatherModels/Weather';

const WeatherApp = () => {
  const [location, setLocation] = useState<string>('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeather = async () => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=c8c89f0cbb4e432db7c181806232204&q=${location}/`;
    setIsLoading(true);

    try {
      const response = await fetch(URL, {mode: 'cors'});
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
      }

      setWeather({
        tempCelsius: data.current.temp_c,
        tempFahrenheit: data.current.temp_f,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        location: `${data.location.name}, ${data.location.country}`,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        onChangeText={setLocation}
        value={location}
        placeholder="Enter Location Here..."
      />
      <Pressable
        onPress={getWeather}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? Colors.primary.p800
              : Colors.primary.p900,
            transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
          },
          styles.btn,
        ]}>
        <Text style={styles.btnText}>Get Weather</Text>
      </Pressable>
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
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  btn: {
    width: '100%',
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
