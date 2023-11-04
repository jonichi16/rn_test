import {StyleSheet, TextInput, View, Keyboard, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Todo} from '../models/Todo';
import TodoList from './TodoList';
import TodoService from '../services/todoSerivce';
import Button from '../../common/components/buttons/Button';
import {Typography} from '../../common/styles';

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
    if (task) {
      await TodoService.create(task);

      setTask('');
    }

    Keyboard.dismiss();
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
    padding: 16,
  },
  inputField: {
    width: '100%',
    height: 72,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    textAlignVertical: 'top',
    marginBottom: 8,
    ...Typography.body.md,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
