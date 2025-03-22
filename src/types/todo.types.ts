export type SortOrder = 'asc' | 'desc';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoCreateInput {
  title: string;
  completed: boolean;
}

export interface TodoUpdateInput extends Partial<Todo> {
  updatedAt?: string;
} 