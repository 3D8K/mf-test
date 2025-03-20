import { useRef, useMemo } from 'react';
import { TaskItem } from './TaskItem';
import { Todo } from '../../types/Todo';
import * as THREE from 'three';

interface TaskListProps {
  todos: Todo[];
  onToggle: (id: string, completed: boolean) => void;
  width: number;
  height: number;
  itemHeight: number;
}

export const TaskList = ({
  todos,
  onToggle,
  width,
  height,
  itemHeight,
}: TaskListProps) => {
  const containerRef = useRef<THREE.Group>(null);
  
  // Оптимизация: вычисляем только видимые элементы
  const visibleItems = useMemo(() => {
    const startIndex = 0; // В реальном приложении это будет зависеть от скролла
    const visibleCount = Math.ceil(height / itemHeight);
    return todos.slice(startIndex, startIndex + visibleCount);
  }, [todos, height, itemHeight]);

  return (
    <group ref={containerRef}>
      {visibleItems.map((todo, index) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          position={[0, -index * itemHeight, 0]}
          onToggle={onToggle}
          width={width}
        />
      ))}
    </group>
  );
}; 