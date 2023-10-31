import {StyleSheet, Text, View, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import {Weather} from '../models/Weather';
import {Typography} from '../../styles';

type WeatherProps = {
  weather: Weather | null;
  error: string;
};

const WeatherComponent = ({weather, error}: WeatherProps) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <Text style={styles.location}>{weather.location}</Text>
          <Text style={styles.condition}>{weather.condition}</Text>
          <Image style={styles.icon} source={{uri: `https:${weather.icon}`}} />
          {isCelsius ? (
            <Text style={styles.temp}>{weather.tempCelsius}</Text>
          ) : (
            <Text style={styles.temp}>{weather.tempFahrenheit}</Text>
          )}
          <View style={styles.tempContainer}>
            <Text style={styles.switchLabel}>Celsius?</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isCelsius ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setIsCelsius(previousState => !previousState)
              }
              value={isCelsius}
            />
          </View>
        </>
      ) : (
        <Text style={styles.error}>{error}</Text>
      )}
    </View>
  );
};

export default WeatherComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: 120,
  },
  location: {
    ...Typography.header.xxl,
  },
  condition: {
    ...Typography.subHeader.lg,
  },
  temp: {
    ...Typography.header.xxxl,
  },
  switchLabel: {
    ...Typography.body.md,
  },
  error: {
    ...Typography.body.lg,
  },
});
