import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Todo} from '../../TodoApp/models/Todo';
import {Colors, Spacing, Typography} from '../../common/styles';
import {getStatus} from '../helpers/status';

type CardProps = {
  todo: Todo;
  weatherCondition: string;
};

const Card = ({todo, weatherCondition}: CardProps) => {
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    setStatus(getStatus(todo.task, weatherCondition));
  }, [todo.task, weatherCondition]);

  return (
    <View style={styles.container}>
      <Text style={styles.task}>{todo.task}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Spacing.spacing.md,
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
  status: {
    ...Typography.subHeader.md,
    textAlign: 'right',
    color: Colors.primary.dark,
    flex: 3,
  },
});
