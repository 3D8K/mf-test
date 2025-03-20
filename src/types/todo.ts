// GET /api/todos
// Response: { todos: Todo[], total: number }

// POST /api/todos
// Body: { title: string, priority: 'low' | 'medium' | 'high' }
// Response: Todo

// PATCH /api/todos/:id
// Body: { status: boolean, priority?: 'low' | 'medium' | 'high' }
// Response: Todo

// DELETE /api/todos/:id
// Response: { success: boolean }

// POST /api/todos/batch
// Body: { ids: string[], action: 'complete' | 'delete' | 'update', data?: any }
// Response: { success: boolean, updated: Todo[] }

export type Priority = 'low' | 'medium' | 'high';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  priority: Priority;
}

export type TodoUpdateData = Partial<Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>>;
