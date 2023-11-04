import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../models/Todo';
import CheckBox from './CheckBox';
import {Colors, Spacing, Typography} from '../../common/styles';

type CardProps = {
  todo: Todo;
  updateStatus: (id: string) => void;
};

const Card = ({todo, updateStatus}: CardProps) => {
  return (
    <View style={styles.container}>
      <CheckBox size={24} onPress={() => updateStatus(todo.id)} />
      <Text style={styles.task}>{todo.task}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: 'lightgray',
    padding: Spacing.spacing.sm,
    borderRadius: 5,
    marginBottom: Spacing.spacing.sm,
  },
  task: {
    ...Typography.subHeader.md,
    color: Colors.primary.dark,
    flex: 7,
  },
});
