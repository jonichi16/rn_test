import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../models/Todo';
import CheckBox from './CheckBox';
import {Spacing, Typography} from '../../common/styles';
import {useTheme} from '@react-navigation/native';
import Slide from '../../common/components/animations/Slide';
import useSlide from '../../common/hooks/useSlide';

type CardProps = {
  todo: Todo;
  updateStatus: (id: string) => void;
};

const Card = ({todo, updateStatus}: CardProps) => {
  const {colors} = useTheme();
  const {slideToRight} = useSlide();

  const onPress = () => {
    slideToRight().start(() => updateStatus(todo.id));
    // updateStatus(todo.id);
  };

  return (
    <Slide>
      <View style={[{backgroundColor: colors.primary}, styles.container]}>
        <CheckBox size={24} onPress={onPress} />
        <Text style={[{color: colors.text}, styles.task]}>{todo.task}</Text>
      </View>
    </Slide>
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
