import {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {Todo} from '../models/Todo';
import TodoService from '../services/todoService';

const useTodo = () => {
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
      await TodoService.create(task.trim());
    }

    setTask('');
  };

  const updateStatus = async (id: string) => {
    await TodoService.updateStatus(id);
  };

  useEffect(() => {
    fetchTodoData();
  }, [todos]);

  return {task, setTask, todos, isLoading, addTodo, updateStatus};
};

export default useTodo;
