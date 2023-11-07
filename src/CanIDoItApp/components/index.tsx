import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MissingPage from './MissingPage';
import Header from './Header';
import {Spacing} from '../../common/styles';
import Card from './Card';
import useTodosWeather from '../hooks/useTodosWeather';

const CanIDoIt = () => {
  const {todos, weather, isLoading} = useTodosWeather();

  if (isLoading) {
    return <Text style={styles.container}>Loading...</Text>;
  }

  if (todos.length === 0) {
    return <MissingPage page="Todo" />;
  }

  if (!weather) {
    return <MissingPage page="Weather" />;
  }

  return (
    <View style={styles.container}>
      <Header weather={weather} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Card todo={item} weatherCondition={weather.condition} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default CanIDoIt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.spacing.md,
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: Spacing.spacing.lg,
  },
});
