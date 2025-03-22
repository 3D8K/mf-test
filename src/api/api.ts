import { todoApi } from './todoApi';
import { Todo } from '../types';
interface GetTodosParams {
  sortOrder?: 'asc' | 'desc';
  filterCompleted?: boolean | null;
}

export const api = {
  getTodos: (params: GetTodosParams) => todoApi.getTodos(params),
  createTodo: (data: Todo) => todoApi.createTodo(data),
  updateTodo: todoApi.updateTodo,
  batchUpdate: todoApi.batchUpdate,
}; 