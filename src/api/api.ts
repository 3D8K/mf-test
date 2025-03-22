import { todoApi } from './todoApi';

interface GetTodosParams {
  sortOrder?: 'asc' | 'desc';
  filterCompleted?: boolean | null;
}

export const api = {
  getTodos: (params: GetTodosParams) => todoApi.getTodos(params),
  createTodo: (data: { title: string }) => todoApi.createTodo(data),
  updateTodo: todoApi.updateTodo,
  batchUpdate: todoApi.batchUpdate,
}; 