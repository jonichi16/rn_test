import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Todo} from '../models/Todo';
import Table from './Table';
import {Colors} from '../../styles';
import TodoService from '../services/todoSerivce';

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
      <Pressable
        onPress={addTodo}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? Colors.primary.p800
              : Colors.primary.p900,
            transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
          },
          styles.btn,
        ]}>
        <Text style={styles.btnText}>Add Todo</Text>
      </Pressable>
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
  btn: {
    width: '100%',
    padding: 8,
    borderRadius: 4,
    marginVertical: 12,
  },
  btnText: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
