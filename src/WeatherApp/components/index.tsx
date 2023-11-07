import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import WeatherComponent from './WeatherComponent';
import Button from '../../common/components/buttons/Button';
import {Spacing, Typography} from '../../common/styles';
import useWeather from '../hooks/useWeather';
import {useTheme} from '@react-navigation/native';

const WeatherApp = () => {
  const {setLocation, location, getWeather, isLoading, weather, error} =
    useWeather();
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={[{borderColor: colors.border}, styles.inputField]}
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
