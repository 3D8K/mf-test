import { create } from 'zustand';
import { Todo } from '../types/Todo';
import { api } from '../api/api';

interface TodoStore {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  sortOrder: "asc" | "desc";
  filterCompleted: boolean | null;
  setSortOrder: (order: "asc" | "desc") => void;
  setFilterCompleted: (completed: boolean | null) => void;
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  toggleTodo: (id: string, completed: boolean) => Promise<void>;
  fetchTodos: () => Promise<void>;
}

export const useStore = create<TodoStore>((set, get) => ({
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
