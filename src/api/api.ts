import { todoApi } from './todoApi';
import { Priority } from '../types';

interface GetTodosParams {
  sortOrder?: 'asc' | 'desc';
  filterCompleted?: boolean | null;
}

// В реальном приложении здесь будет реальный API
export const api = {
  getTodos: (params: GetTodosParams) => todoApi.getTodos(params),
  createTodo: (data: { title: string; priority: Priority }) => todoApi.createTodo(data),
  updateTodo: todoApi.updateTodo,
  batchUpdate: todoApi.batchUpdate,
}; 