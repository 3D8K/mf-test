import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { Header } from './components/Header';
import { Todo } from './types/Todo';
import { useStore } from './store/store';

const LIST_WIDTH = 10;
const LIST_HEIGHT = 8;
const ITEM_HEIGHT = 1;

export const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterCompleted, setFilterCompleted] = useState<boolean | null>(null);

  const { todos, addTodo, toggleTodo, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    addTodo(todo);
    setShowForm(false);
  };

  const handleToggleTodo = (id: string, completed: boolean) => {
    toggleTodo(id, completed);
  };

  const filteredAndSortedTodos = todos
    .filter(todo => filterCompleted === null || todo.completed === filterCompleted)
    .sort((a: Todo, b: Todo) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />

      {/* Основной контейнер */}
      <group position={[0, 0, 0]}>
        {/* Хедер с кнопками управления */}
        <Header
          width={LIST_WIDTH}
          height={LIST_HEIGHT}
          onAddClick={() => setShowForm(true)}
          onSortClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
          onFilterClick={() => setFilterCompleted(prev => prev === null ? true : prev === true ? false : null)}
          sortOrder={sortOrder}
          filterCompleted={filterCompleted}
        />

        {/* Список задач */}
        <TaskList
          todos={filteredAndSortedTodos}
          onToggle={handleToggleTodo}
          width={LIST_WIDTH}
          height={LIST_HEIGHT}
          itemHeight={ITEM_HEIGHT}
        />

        {/* Форма добавления задачи */}
        {showForm && (
          <TaskForm
            position={[0, 0, 1]}
            width={LIST_WIDTH}
            height={LIST_HEIGHT / 2}
            onSubmit={handleAddTodo}
            onCancel={() => setShowForm(false)}
          />
        )}
      </group>
    </Canvas>
  );
};
