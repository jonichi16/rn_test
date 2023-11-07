import {StyleSheet, TextInput, View, Keyboard, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Todo} from '../models/Todo';
import TodoList from './TodoList';
import TodoService from '../services/todoService';
import Button from '../../common/components/buttons/Button';
import {Spacing, Typography} from '../../common/styles';

const TodoApp = () => {
  const [task, setTask] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTodoData = async () => {
    try {
      const todoData = await TodoService.findAll();

      setTodos(todoData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async () => {
    Keyboard.dismiss();

    if (task.trim()) {
      await TodoService.create(task);
    }

    setTask('');
  };

  const updateStatus = async (id: string) => {
    await TodoService.updateStatus(id);
  };

  useEffect(() => {
    fetchTodoData();
  }, [todos]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
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
