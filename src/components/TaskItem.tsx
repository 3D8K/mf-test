import { Text } from '@react-three/drei';
import { Checkbox } from './Checkbox';
import { Todo } from '../types/Todo';

interface TaskItemProps {
  todo: Todo;
  position: [number, number, number];
  onToggle: (id: string, completed: boolean) => void;
  width: number;
}

export const TaskItem = ({
  todo,
  position,
  onToggle,
  width,
}: TaskItemProps) => {
  return (
    <group position={position}>
      <Checkbox
        position={[-width / 2 + 0.5, 0, 0]}
        checked={todo.completed}
        onChange={(checked) => onToggle(todo.id, checked)}
        size={0.8}
      />
      <Text
        position={[-width / 2 + 2, 0, 0]}
        fontSize={0.5}
        color={todo.completed ? '#9E9E9E' : '#000000'}
        maxWidth={width - 4}
        anchorX="left"
        anchorY="middle"
      >
        {todo.title}
      </Text>
    </group>
  );
}; 