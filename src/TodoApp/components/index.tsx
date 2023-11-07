import {StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';

import TodoList from './TodoList';
import Button from '../../common/components/buttons/Button';
import {Spacing, Typography} from '../../common/styles';
import useTodo from '../hooks/useTodo';
import {useTheme} from '@react-navigation/native';

const TodoApp = () => {
  const {todos, task, setTask, isLoading, addTodo, updateStatus} = useTodo();
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={[{borderColor: colors.border}, styles.inputField]}
        onChangeText={setTask}
        value={task}
        multiline={true}
        numberOfLines={2}
        placeholder="Enter todo here"
      />
      <Button title="Add Todo" handlePress={addTodo} />
      {isLoading ? (
        <View style={styles.center}>
          <Text>Loading...</Text>
        </View>
      ) : (
        <TodoList todos={todos} updateStatus={updateStatus} />
      )}
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.spacing.md,
  },
  inputField: {
    width: '100%',
    minHeight: 72,
    padding: Spacing.spacing.xs,
    borderWidth: 1,
    borderRadius: Spacing.spacing.xxs,
    textAlignVertical: 'top',
    marginBottom: Spacing.spacing.xxs,
    ...Typography.body.md,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
