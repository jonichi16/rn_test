import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../../TodoApp/models/Todo';
import {Spacing, Typography} from '../../common/styles';
import useStatus from '../hooks/useStatus';
import {useTheme} from '@react-navigation/native';

type CardProps = {
  todo: Todo;
  weatherCondition: string;
};

const Card = ({todo, weatherCondition}: CardProps) => {
  const status = useStatus(todo.task, weatherCondition);
  const {colors} = useTheme();

  return (
    <View style={[{backgroundColor: colors.primary}, styles.container]}>
      <Text style={[{color: colors.text}, styles.task]}>{todo.task}</Text>
      <Text style={[{color: colors.text}, styles.status]}>{status}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Spacing.spacing.md,
    padding: Spacing.spacing.md,
    borderRadius: 5,
    marginBottom: Spacing.spacing.md,
  },
  task: {
    ...Typography.subHeader.md,
    flex: 7,
  },
  status: {
    ...Typography.subHeader.md,
    textAlign: 'right',
    flex: 3,
  },
});
