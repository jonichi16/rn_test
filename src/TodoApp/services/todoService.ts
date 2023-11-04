import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Todo} from '../models/Todo';

const findAll = async (): Promise<Todo[]> => {
  try {
    const data = await AsyncStorage.getItem('todos');
    const todos = data !== null ? JSON.parse(data) : [];
    return todos;
  } catch (error) {
    throw error;
  }
};

const create = async (task: string): Promise<void> => {
  const newTodo = {
    id: uuidv4(),
    task: task,
    date: new Date().toLocaleDateString(),
  };

  try {
    let todos = await findAll();
    todos = [...todos, newTodo];

    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (id: string): Promise<void> => {
  try {
    let todos = await findAll();

    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex || todoIndex === 0) {
      todos.splice(todoIndex, 1);

      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    }
  } catch (error) {
    console.log(error);
  }
};

const TodoService = {
  findAll,
  create,
  updateStatus,
};

export default TodoService;
