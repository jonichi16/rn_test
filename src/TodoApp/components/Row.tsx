import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import TodoService from '../services/todoSerivce';

interface RowProps {
  col1?: string;
  col2?: string;
  id?: string;
  isComplete?: boolean;
  title?: string;
  isLast: boolean;
}

const Row = ({col1, col2, id, isComplete, title, isLast}: RowProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(isComplete!);

  const updateStatus = () => {
    TodoService.updateStatus(id!);
    setIsEnabled(prevState => !prevState);
  };

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
      <Switch
        style={[styles.isComplete]}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={updateStatus}
        value={isEnabled}
      />
      <Text
        style={[
          styles.title,
          styles.center,
          isEnabled ? styles.underlined : styles.text,
        ]}>
        {title}
      </Text>
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
  underlined: {
    textDecorationLine: 'line-through',
  },
  bold: {
    fontWeight: '700',
    fontSize: 16,
  },
  isComplete: {
    flex: 3,
  },
  title: {
    flex: 7,
  },
});
