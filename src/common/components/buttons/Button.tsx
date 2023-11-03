import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../../styles';

type ButtonProps = {
  title: string;
  testID?: string;
  style?: ViewStyle;
  handlePress: () => void;
};

const Button = ({title, testID, style, handlePress}: ButtonProps) => {
  return (
    <Pressable
      role="button"
      testID={testID || 'button'}
      onPress={handlePress}
      style={({pressed}) => [
        {
          ...(style || {width: '100%'}),
          backgroundColor: pressed ? Colors.primary.p800 : Colors.primary.p900,
          transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
        },
        styles.button,
      ]}>
      <Text testID="ButtonText" style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: Spacing.spacing.sm,
    borderRadius: Spacing.spacing.xxs,
    marginVertical: Spacing.spacing.xs,
  },
  buttonText: {
    ...Typography.header.md,
    color: Colors.primary.light,
    textAlign: 'center',
  },
});
