import { mockApi } from './mockData';
import { Priority } from '../types';

interface GetTodosParams {
  sortOrder?: 'asc' | 'desc';
  filterCompleted?: boolean | null;
}

export const todoApi = {
  async getTodos(params: GetTodosParams = {}) {
    try {
      return await mockApi.getTodos(params);
    } catch {
      throw new Error('Failed to fetch todos');
    }
  },

  async createTodo(data: { title: string; priority: Priority }) {
    try {
      return await mockApi.createTodo(data);
    } catch {
      throw new Error('Failed to create todo');
    }
  },

  async updateTodo(
    id: string,
    updates: Partial<{ title: string; completed: boolean; priority: Priority }>
  ) {
    try {
      return await mockApi.updateTodo(id, updates);
    } catch {
      throw new Error('Failed to update todo');
    }
  },

  async deleteTodo(id: string) {
    try {
      return await mockApi.deleteTodo(id);
    } catch {
      throw new Error('Failed to delete todo');
    }
  },

  async batchUpdate(ids: string[], action: 'complete' | 'delete') {
    try {
      return await mockApi.batchUpdateTodos(ids, action);
    } catch {
      throw new Error('Failed to perform batch update');
    }
  },
};
