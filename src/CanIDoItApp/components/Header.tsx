import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Weather} from '../../WeatherApp/models/Weather';
import {Spacing, Typography} from '../../common/styles';
import Bounce from '../../common/components/animations/Bounce';

type HeaderProps = {
  weather: Weather;
};

const Header = ({weather}: HeaderProps) => {
  const {tempCelsius, condition, icon, location, country} = weather;

  return (
    <View style={styles.container}>
      <Text style={styles.location}>
        {location}, {country}
      </Text>
      <View style={styles.weather}>
        <View>
          <Text style={styles.condition}>{condition}</Text>
          <Text style={styles.temp}>{tempCelsius}</Text>
        </View>
        <View>
          <Bounce>
            <Image style={styles.icon} source={{uri: `https:${icon}`}} />
          </Bounce>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.spacing.xxs,
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.spacing.sm,
  },
  location: {
    ...Typography.header.xl,
    marginBottom: Spacing.spacing.sm,
  },
  condition: {
    ...Typography.subHeader.md,
  },
  temp: {
    ...Typography.subHeader.sm,
    textAlign: 'center',
  },
  icon: {
    width: 48,
    height: 48,
  },
});
