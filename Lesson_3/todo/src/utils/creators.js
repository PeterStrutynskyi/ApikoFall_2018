import uniqid from 'uniqid';

export const createTodo = (newTodo) => ({
  id: uniqid(),
  isCompleted: false,
  task: newTodo
});