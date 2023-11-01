import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../styles';

type ButtonProps = {
  title: string;
  style: ViewStyle;
  handlePress: () => void;
};

const Button = ({title, style, handlePress}: ButtonProps) => {
  return (
    <Pressable
      onPress={handlePress}
      style={({pressed}) => [
        {
          ...style,
          backgroundColor: pressed ? Colors.primary.p800 : Colors.primary.p900,
          transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
        },
        styles.button,
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: Spacing.spacing.xs,
    borderRadius: Spacing.spacing.xxs,
    marginVertical: Spacing.spacing.xs,
  },
  buttonText: {
    ...Typography.header.md,
    color: Colors.primary.light,
    textAlign: 'center',
  },
});
