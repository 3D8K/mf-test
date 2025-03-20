// src/api/mockData.ts
import { Todo } from '../types/Todo';

let todos: Todo[] = [
  {
    id: '1',
    title: 'Изучить Three.js',
    completed: false,
    createdAt: '2024-03-20T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Создать 3D компоненты',
    completed: true,
    createdAt: '2024-03-20T11:00:00Z',
    updatedAt: '2024-03-20T11:30:00Z',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Настроить маршрутизацию',
    completed: false,
    createdAt: '2024-03-20T12:00:00Z',
    updatedAt: '2024-03-20T12:00:00Z',
    priority: 'low',
  },
  {
    id: '4',
    title: 'Изучить React Hooks',
    completed: false,
    createdAt: '2024-03-20T13:00:00Z',
    updatedAt: '2024-03-20T13:00:00Z',
    priority: 'medium',
  },
  {
    id: '5',
    title: 'Поработать с Redux',
    completed: true,
    createdAt: '2024-03-20T14:00:00Z',
    updatedAt: '2024-03-20T14:30:00Z',
    priority: 'high',
  },
  {
    id: '6',
    title: 'Прочитать книгу по JavaScript',
    completed: false,
    createdAt: '2024-03-20T15:00:00Z',
    updatedAt: '2024-03-20T15:00:00Z',
    priority: 'low',
  },
  {
    id: '7',
    title: 'Реализовать чат на WebSocket',
    completed: true,
    createdAt: '2024-03-20T16:00:00Z',
    updatedAt: '2024-03-20T16:45:00Z',
    priority: 'medium',
  },
  {
    id: '8',
    title: 'Изучить TypeScript',
    completed: false,
    createdAt: '2024-03-20T17:00:00Z',
    updatedAt: '2024-03-20T17:00:00Z',
    priority: 'high',
  },
  {
    id: '9',
    title: 'Изучить основы CSS',
    completed: true,
    createdAt: '2024-03-20T18:00:00Z',
    updatedAt: '2024-03-20T18:30:00Z',
    priority: 'low',
  },
  {
    id: '10',
    title: 'Сделать сайт для портфолио',
    completed: false,
    createdAt: '2024-03-20T19:00:00Z',
    updatedAt: '2024-03-20T19:00:00Z',
    priority: 'high',
  },
  {
    id: '11',
    title: 'Разобраться в Docker',
    completed: false,
    createdAt: '2024-03-20T20:00:00Z',
    updatedAt: '2024-03-20T20:00:00Z',
    priority: 'medium',
  }
];


export const mockApi = {
  getTodos: async () => {
    return { todos };
  },

  createTodo: async (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTodo: Todo = {
      ...todo,
      id: String(todos.length + 1),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    todos.push(newTodo);
    return newTodo;
  },

  updateTodo: async (id: string, data: Partial<Todo>) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) throw new Error('Todo not found');

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return todos[todoIndex];
  },

  deleteTodo: async (id: string) => {
    todos = todos.filter((todo) => todo.id !== id);
  },

  batchUpdate: async (ids: string[], action: 'complete' | 'delete' | 'update', data?: Partial<Todo>) => {
    switch (action) {
      case 'complete':
        todos = todos.map((todo) =>
          ids.includes(todo.id)
            ? { ...todo, completed: true, updatedAt: new Date().toISOString() }
            : todo
        );
        break;
      case 'delete':
        todos = todos.filter((todo) => !ids.includes(todo.id));
        break;
      case 'update':
        todos = todos.map((todo) =>
          ids.includes(todo.id)
            ? { ...todo, ...data, updatedAt: new Date().toISOString() }
            : todo
        );
        break;
    }
    return { success: true, updated: todos };
  },
};
