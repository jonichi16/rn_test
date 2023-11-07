import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../models/Todo';
import CheckBox from './CheckBox';
import {Spacing, Typography} from '../../common/styles';
import {useTheme} from '@react-navigation/native';

type CardProps = {
  todo: Todo;
  updateStatus: (id: string) => void;
};

const Card = ({todo, updateStatus}: CardProps) => {
  const {colors} = useTheme();

  return (
    <View style={[{backgroundColor: colors.primary}, styles.container]}>
      <CheckBox size={24} onPress={() => updateStatus(todo.id)} />
      <Text style={[{color: colors.text}, styles.task]}>{todo.task}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    padding: Spacing.spacing.md,
    borderRadius: 5,
    marginBottom: Spacing.spacing.md,
  },
  task: {
    ...Typography.subHeader.md,
    flex: 7,
  },
});
