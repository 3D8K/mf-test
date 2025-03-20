// src/api/mockData.ts
import { Todo } from '../types/Todo';

const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'Изучить Three.js',
    completed: false,
    createdAt: '2024-03-20T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'Создать 3D Todo приложение',
    completed: false,
    createdAt: '2024-03-20T11:00:00Z',
    updatedAt: '2024-03-20T11:00:00Z',
  },
  {
    id: '3',
    title: 'Оптимизировать производительность',
    completed: true,
    createdAt: '2024-03-20T12:00:00Z',
    updatedAt: '2024-03-20T12:00:00Z',
  },
];

// Helper to simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to generate IDs (simplified version of uuid)
const generateId = () => Math.random().toString(36).substr(2, 9);

// Mock API implementation
export const mockApi = {
  async getTodos(): Promise<{ todos: Todo[]; total: number }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          todos: mockTodos,
          total: mockTodos.length,
        });
      }, 500);
    });
  },

  async getTodoById(id: string) {
    await delay(200);
    const todo = mockTodos.find((t) => t.id === id);
    if (!todo) throw new Error('Todo not found');
    return todo;
  },

  async createTodo(todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo: Todo = {
          ...todo,
          id: String(mockTodos.length + 1),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        mockTodos.push(newTodo);
        resolve(newTodo);
      }, 500);
    });
  },

  async updateTodo(id: string, data: Partial<Todo>): Promise<Todo> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockTodos.findIndex((todo) => todo.id === id);
        if (index === -1) {
          reject(new Error('Todo not found'));
          return;
        }
        const updatedTodo = {
          ...mockTodos[index],
          ...data,
          updatedAt: new Date().toISOString(),
        };
        mockTodos[index] = updatedTodo;
        resolve(updatedTodo);
      }, 500);
    });
  },

  async deleteTodo(id: string): Promise<{ success: boolean }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockTodos.findIndex((todo) => todo.id === id);
        if (index === -1) {
          reject(new Error('Todo not found'));
          return;
        }
        mockTodos.splice(index, 1);
        resolve({ success: true });
      }, 500);
    });
  },

  async batchUpdateTodos(
    ids: string[],
    action: 'complete' | 'delete' | 'update',
    data?: Partial<Todo>
  ): Promise<{ success: boolean; updated: Todo[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedTodos = mockTodos
          .filter((todo) => ids.includes(todo.id))
          .map((todo) => {
            if (action === 'delete') {
              const index = mockTodos.findIndex((t) => t.id === todo.id);
              if (index !== -1) {
                mockTodos.splice(index, 1);
              }
              return todo;
            }
            const updatedTodo = {
              ...todo,
              ...data,
              updatedAt: new Date().toISOString(),
            };
            const index = mockTodos.findIndex((t) => t.id === todo.id);
            if (index !== -1) {
              mockTodos[index] = updatedTodo;
            }
            return updatedTodo;
          });
        resolve({ success: true, updated: updatedTodos });
      }, 500);
    });
  },
};
