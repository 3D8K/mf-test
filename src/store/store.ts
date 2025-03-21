import { create } from 'zustand';
import { TodoStore, Todo, TodoCreateInput } from '../types';
import { api } from '../api/api';

export const useStore = create<TodoStore>((set) => ({
  todos: [],
  isLoading: false,
  error: null,
  sortOrder: "desc",
  filterCompleted: null,

  setSortOrder: (order) => set({ sortOrder: order }),
  setFilterCompleted: (completed) => set({ filterCompleted: completed }),

  fetchTodos: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.getTodos();
      set({ todos: response.todos });
    } catch (error) {
      set({ error: 'Error loading tasks' });
    } finally {
      set({ isLoading: false });
    }
  },

  addTodo: async (todo: TodoCreateInput) => {
    try {
      set({ isLoading: true, error: null });
      const newTodo = await api.createTodo(todo);
      set((state) => ({ todos: [...state.todos, newTodo] }));
    } catch (error) {
      set({ error: 'Error adding task' });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  toggleTodo: async (id, completed) => {
    try {
      set({ isLoading: true, error: null });
      const updatedTodo = await api.updateTodo(id, { completed });
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        ),
      }));
    } catch (error) {
      set({ error: 'Error updating task' });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  batchUpdate: async (ids, action, data) => {
    try {
      set({ isLoading: true, error: null });
      const result = await api.batchUpdate(ids, action, data);
      if (result.success) {
        set({ todos: result.updated });
      }
    } catch (error) {
      set({ error: 'Error updating tasks' });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
