import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Todo} from '../models/Todo';
import Table from './Table';
import TodoService from '../services/todoSerivce';
import Button from '../../common/components/buttons/Button';

const TodoApp = () => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (input) {
      TodoService.create({title: input});
      setTodos(TodoService.findAll());

      setInput('');
    }

    Keyboard.dismiss();
  };

  useEffect(() => {
    setTodos(TodoService.findAll());
  }, [todos]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        onChangeText={setInput}
        value={input}
        multiline={true}
        numberOfLines={2}
        placeholder="Enter todo here..."
      />
      <Button title="Add Todo" handlePress={addTodo} />
      <Table todos={todos} />
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
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    textAlignVertical: 'top',
  },
});
