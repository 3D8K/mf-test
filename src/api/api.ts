import { mockApi } from './mockData';
import { Priority } from '../types';

// В реальном приложении здесь будет реальный API
export const api = {
  getTodos: (sortOrder?: 'asc' | 'desc') => 
    mockApi.getTodos({ sortBy: 'createdAt', sortOrder }),
  createTodo: (data: { title: string; priority: Priority }) => 
    mockApi.createTodo(data),
  updateTodo: (id: string, data: { completed?: boolean; priority?: Priority }) => 
    mockApi.updateTodo(id, data),
  batchUpdate: (ids: string[], action: 'complete' | 'delete') => 
    mockApi.batchUpdateTodos(ids, action),
}; 