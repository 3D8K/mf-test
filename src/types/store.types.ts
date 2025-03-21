import { Todo, TodoCreateInput, SortOrder } from './todo.types';

export interface TodoStore {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  sortOrder: SortOrder;
  filterCompleted: boolean | null;

  setSortOrder: (order: SortOrder) => void;
  setFilterCompleted: (completed: boolean | null) => void;
  fetchTodos: () => Promise<void>;
  addTodo: (todo: TodoCreateInput) => Promise<void>;
  toggleTodo: (id: string, completed: boolean) => Promise<void>;
  batchUpdate: (ids: string[], action: BatchAction, data?: Partial<Todo>) => Promise<void>;
}

export type BatchAction = 'complete' | 'delete' | 'update'; 