import AllTodos from './pages/AllTodos';
import SingleTodo from './pages/SingleTodo';

// all matches must be exact except for named parameters
export const routes = {
  '/': AllTodos,
  '/todos/:id': SingleTodo
};
