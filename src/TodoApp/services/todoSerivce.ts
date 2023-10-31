import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {Todo} from '../models/Todo';

let todoData: Todo[] = [];

const findAll = (): Todo[] => {
  return todoData;
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

const TodoService = {
  findAll,
  create,
};

export default TodoService;
