// src/api/mockData.ts
import { Todo, Priority } from '../types';

const delay = (ms = 200) => new Promise(resolve => setTimeout(resolve, ms));

let todos: Todo[] = [
  {
    id: '1',
    title: 'Learn React',
    completed: false,
    createdAt: '2024-02-09T10:00:00.000Z',
    updatedAt: '2024-02-09T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Build a todo app',
    completed: true,
    createdAt: '2024-02-09T11:00:00.000Z',
    updatedAt: '2024-02-09T15:00:00.000Z',
  },
];

// Helper to generate IDs (simplified version of uuid)
const generateId = () => Math.random().toString(36).substr(2, 9);

// Mock API implementation
export const mockApi = {
  async getTodos({ sortOrder = 'desc', filterCompleted = null } = {}) {
    await delay();
    
    let filteredTodos = [...todos];

    // Apply completed filter
    if (filterCompleted !== null) {
      filteredTodos = filteredTodos.filter(todo => todo.completed === filterCompleted);
    }

    // Apply sorting
    const sortedTodos = filteredTodos.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return { todos: sortedTodos };
  },

  async getTodoById(id: string) {
    await delay(200);
    const todo = todos.find((t) => t.id === id);
    if (!todo) throw new Error('Todo not found');
    return todo;
  },

  async createTodo({ title, priority }: { title: string; priority: Priority }) {
    await delay();
    if (title.length > 100) {
      throw new Error('Title must be less than 100 characters');
    }
    const newTodo: Todo = {
      id: generateId(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      priority
    };
    todos = [...todos, newTodo];
    return newTodo;
  },

  async updateTodo(id: string, updates: Partial<Todo>) {
    await delay();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found');
    }
    const updatedTodo = { ...todos[todoIndex], ...updates };
    todos = todos.map(todo => todo.id === id ? updatedTodo : todo);
    return updatedTodo;
  },

  async deleteTodo(id: string) {
    await delay();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found');
    }
    todos = todos.filter(todo => todo.id !== id);
    return { success: true };
  },

  async batchUpdateTodos(ids: string[], action: 'complete' | 'delete') {
    await delay();
    if (action === 'delete') {
      todos = todos.filter(todo => !ids.includes(todo.id));
    } else if (action === 'complete') {
      todos = todos.map(todo =>
        ids.includes(todo.id) ? { ...todo, completed: true } : todo
      );
    }
    return { success: true };
  }
};
