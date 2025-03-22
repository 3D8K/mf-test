import { Todo } from '../types';
import { mockApi } from './mockData';

/**
 *  Updated API logic
 * 
 *  Why changed:
 * - `createTodo` now takes a `Todo` object instead of just `title`, making it more flexible.
 * - Standardized error handling: every method now wraps errors in `Error`.
 * - More consistent structure across API methods.
 * 
 *  Purpose:
 * - Easier to work with `createTodo`, since it accepts a full `Todo` object.
 * - Unified approach to handling errors, making debugging easier.
 * - Code is now cleaner and more structured.
 */

export const todoApi = {
  async getTodos(params = {}) {
    try {
      return await mockApi.getTodos(params);
    } catch {
      throw new Error('Failed to fetch todos');
    }
  },

  async createTodo(todo: Todo) {
    try {
      return await mockApi.createTodo(todo.title);
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error('Failed to create todo');
    }
  },

  async updateTodo(
    id: string,
    updates: Partial<{ title: string; completed: boolean }>
  ) {
    try {
      return await mockApi.updateTodo(id, updates);
    } catch (error) {
      if (error instanceof Error) throw error;
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
