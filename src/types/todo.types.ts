export type Priority = 'low' | 'medium' | 'high';
export type SortOrder = 'asc' | 'desc';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  priority: Priority;
}

export interface TodoCreateInput {
  title: string;
  completed: boolean;
  priority: Priority;
}

export interface TodoUpdateInput extends Partial<Todo> {
  updatedAt?: string;
} 