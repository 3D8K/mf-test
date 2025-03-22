export * from './todo.types';
export * from './ui.types';
export * from './store.types';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoStore {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  sortOrder: 'asc' | 'desc';
  filterCompleted: boolean | null;
  
  setSortOrder: (order: 'asc' | 'desc') => void;
  setFilterCompleted: (completed: boolean | null) => void;
  fetchTodos: () => Promise<void>;
  addTodo: (todo: { title: string }) => Promise<void>;
  toggleTodo: (id: string, completed: boolean) => Promise<void>;
  batchUpdate: (ids: string[], action: 'complete' | 'delete') => Promise<void>;
} 