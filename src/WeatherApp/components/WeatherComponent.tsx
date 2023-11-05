import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Weather} from '../models/Weather';
import {Spacing, Typography} from '../../common/styles';
import Bounce from '../../common/components/animations/Bounce';

type WeatherProps = {
  weather: Weather | null;
  error: string;
};

const WeatherComponent = ({weather, error}: WeatherProps) => {
  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <Text
            style={
              styles.location
            }>{`${weather.location}, ${weather.country}`}</Text>
          <Text style={styles.condition}>{weather.condition}</Text>
          <Bounce>
            <Image
              style={styles.icon}
              source={{uri: `https:${weather.icon}`}}
            />
          </Bounce>
          <Text style={styles.temp}>{weather.tempCelsius}</Text>
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
  icon: {
    width: 120,
    height: 120,
  },
  location: {
    ...Typography.header.xxl,
    textAlign: 'center',
  },
  condition: {
    ...Typography.subHeader.lg,
    marginBottom: Spacing.spacing.xl,
    textAlign: 'center',
  },
  temp: {
    ...Typography.header.xxxl,
  },
  switchLabel: {
    ...Typography.body.md,
  },
  error: {
    ...Typography.body.lg,
    textAlign: 'center',
  },
});
