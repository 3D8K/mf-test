import { create } from 'zustand';
import { TodoStore } from '../types';
import { api } from '../api/api';

export const useStore = create<TodoStore>((set, get) => ({
  todos: [],
  isLoading: false,
  error: null,
  sortOrder: "desc",
  filterCompleted: null,

  setSortOrder: (order) => {
    set({ sortOrder: order });
    get().fetchTodos();
  },
  
  setFilterCompleted: (completed) => {
    set({ filterCompleted: completed });
    get().fetchTodos();
  },

  fetchTodos: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.getTodos({
        sortOrder: get().sortOrder,
        filterCompleted: get().filterCompleted
      });
      set({ todos: response.todos });
    } catch (error) {
      set({ error: 'Error loading tasks' });
    } finally {
      set({ isLoading: false });
    }
  },

  addTodo: async (todo) => {
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

  batchUpdate: async (ids, action) => {
    try {
      set({ isLoading: true, error: null });
      const result = await api.batchUpdate(ids, action);
      if (result.success) {
        if (action === 'delete') {
          set((state) => ({
            todos: state.todos.filter((todo) => !ids.includes(todo.id))
          }));
        } else if (action === 'complete') {
          set((state) => ({
            todos: state.todos.map((todo) =>
              ids.includes(todo.id)
                ? { ...todo, completed: true }
                : todo
            )
          }));
        }
      }
    } catch (error) {
      set({ error: 'Error updating tasks' });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
