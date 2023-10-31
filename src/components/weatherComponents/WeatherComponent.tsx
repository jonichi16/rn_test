import {StyleSheet, Text, View, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import {Weather} from '../../models/weatherModels/Weather';
import {Typography} from '../../styles';

type WeatherProps = {
  weather: Weather;
};

const WeatherComponent = ({weather}: WeatherProps) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const {location, tempCelsius, tempFahrenheit, condition, icon} = weather;

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.condition}>{condition}</Text>
      <Image style={styles.icon} source={{uri: `https:${icon}`}} />
      {isCelsius ? (
        <Text style={styles.temp}>{tempCelsius}</Text>
      ) : (
        <Text style={styles.temp}>{tempFahrenheit}</Text>
      )}
      <View style={styles.tempContainer}>
        <Text style={styles.switchLabel}>Celsius?</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isCelsius ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsCelsius(previousState => !previousState)}
          value={isCelsius}
        />
      </View>
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
});
