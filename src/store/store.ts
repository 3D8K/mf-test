import { create } from 'zustand';
import { Todo } from '../types/Todo';
import { api } from '../api/api';

interface TodoStore {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  toggleTodo: (id: string, completed: boolean) => Promise<void>;
  fetchTodos: () => Promise<void>;
}

export const useStore = create<TodoStore>((set) => ({
  todos: [],
  isLoading: false,
  error: null,

  fetchTodos: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.getTodos();
      set({ todos: response.todos });
    } catch (error) {
      set({ error: 'Ошибка при загрузке задач' });
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
      set({ error: 'Ошибка при добавлении задачи' });
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
      set({ error: 'Ошибка при обновлении задачи' });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
