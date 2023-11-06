import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Todo} from '../../TodoApp/models/Todo';
import {Colors, Spacing, Typography} from '../../common/styles';
import {classifyTask} from '../helpers/status';

type CardProps = {
  todo: Todo;
  weatherCondition: string;
};

const Card = ({todo, weatherCondition}: CardProps) => {
  const [status, setStatus] = useState<string>('');

  const getStatus = (): string => {
    const statuses: string[] = ['Imposible!', 'Maybe?', 'Possible.'];

    return statuses[Math.floor(Math.random() * 3)];
  };

  useEffect(() => {
    setStatus(getStatus());
    classifyTask(todo.task, weatherCondition);
  }, []);

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
    gap: 16,
    backgroundColor: 'lightgray',
    padding: Spacing.spacing.md,
    borderRadius: 5,
    marginBottom: Spacing.spacing.md,
  },
  task: {
    ...Typography.subHeader.md,
    color: Colors.primary.dark,
    flex: 6,
  },
  status: {
    ...Typography.subHeader.md,
    textAlign: 'center',
    color: Colors.primary.dark,
    flex: 2,
    // borderLeftWidth: 2,
    // borderColor: 'gray',
    // borderStyle: 'dashed',
    paddingLeft: Spacing.spacing.xs,
  },
});
