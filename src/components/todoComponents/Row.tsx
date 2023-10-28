import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface RowProps {
  col1?: string;
  col2?: string;
  isComplete?: boolean;
  title?: string;
  isLast: boolean;
}

const Row = ({col1, col2, isComplete, title, isLast}: RowProps) => {
  if (col1 && col2) {
    return (
      <View
        style={[
          styles.rowHeader,
          isLast ? styles.borderBottom : styles.borderNoBottom,
        ]}>
        <Text
          style={[styles.isComplete, styles.center, styles.text, styles.bold]}>
          {col1}
        </Text>
        <Text style={[styles.title, styles.center, styles.text, styles.bold]}>
          {col2}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.row,
        isLast ? styles.borderBottom : styles.borderNoBottom,
      ]}>
      <Text style={[styles.isComplete, styles.center, styles.text]}>
        {isComplete!.toString()}
      </Text>
      <Text style={[styles.title, styles.center, styles.text]}>{title}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  rowHeader: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'lightgray',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
  },
  borderNoBottom: {
    borderBottomWidth: 0,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  center: {
    textAlign: 'center',
    padding: 8,
  },
  text: {
    color: 'black',
  },
  bold: {
    fontWeight: '700',
    fontSize: 16,
  },
  isComplete: {
    flex: 2,
  },
  title: {
    flex: 8,
  },
});
