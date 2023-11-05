import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../../TodoApp/models/Todo';
import {Colors, Spacing, Typography} from '../../common/styles';

type CardProps = {
  todo: Todo;
};

const Card = ({todo}: CardProps) => {
  return (
    <View style={styles.container}>
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
    padding: Spacing.spacing.md,
    borderRadius: 5,
    marginBottom: Spacing.spacing.md,
  },
  task: {
    ...Typography.subHeader.md,
    color: Colors.primary.dark,
    flex: 7,
  },
});
