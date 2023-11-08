import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
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
  const slide = useRef(new Animated.Value(0)).current;

  const onPress = () => {
    Animated.timing(slide, {
      toValue: Dimensions.get('window').width,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => updateStatus(todo.id));
  };

  return (
    <Animated.View style={{transform: [{translateX: slide}]}}>
      <View style={[{backgroundColor: colors.primary}, styles.container]}>
        <CheckBox size={24} onPress={onPress} />
        <Text style={[{color: colors.text}, styles.task]}>{todo.task}</Text>
      </View>
    </Animated.View>
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
