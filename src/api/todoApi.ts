import { mockApi } from './mockData';

interface GetTodosParams {
  sortOrder?: string;
  filterCompleted?: null;
}

export const todoApi = {
  async getTodos(params: GetTodosParams) {
    try {
      return await mockApi.getTodos(params);
    } catch {
      throw new Error('Failed to fetch todos');
    }
  },

  async createTodo(data: { title: string }) {
    try {
      return await mockApi.createTodo(data);
    } catch {
      throw new Error('Failed to create todo');
    }
  },

  async updateTodo(id: string, updates: { completed: boolean }) {
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
      throw new Error('Failed to batch update todos');
    }
  },
};
