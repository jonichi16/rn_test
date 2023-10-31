import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../styles';
import {Weather} from '../WeatherApp/models/Weather';
import WeatherComponent from '../WeatherApp/components/WeatherComponent';

const WeatherApp = () => {
  const [location, setLocation] = useState<string>('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string>('Please a location');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeather = async () => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=c8c89f0cbb4e432db7c181806232204&q=${location}/`;
    setIsLoading(true);

    try {
      const response = await fetch(URL, {mode: 'cors'});
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setWeather({
          tempCelsius: `${data.current.temp_c}°C`,
          tempFahrenheit: `${data.current.temp_f}°F`,
          condition: data.current.condition.text,
          icon: data.current.condition.icon,
          location: `${data.location.name}, ${data.location.country}`,
        });
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
