import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {Todo} from '../models/Todo';

let todoData: Todo[] = [];

const findAll = (): Todo[] => {
  return todoData;
};

const findById = (id: string): Todo | undefined => {
  return todoData.find(todo => {
    todo.id === id;
  });
};

type Body = {
  title: string;
};
const create = ({title}: Body) => {
  const newTodo = {
    id: uuidv4(),
    title: title,
    isComplete: false,
    date: new Date().toLocaleDateString(),
  };

  todoData = [...todoData, newTodo];
};

const updateStatus = (id: string) => {
  const todoIndex = todoData.findIndex(todo => todo.id === id);

  if (todoIndex || todoIndex === 0) {
    todoData[todoIndex].isComplete = !todoData[todoIndex].isComplete;
  }
};

const TodoService = {
  findAll,
  findById,
  create,
  updateStatus,
};

export default TodoService;
