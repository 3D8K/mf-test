import { useState } from 'react';
import { Text } from '@react-three/drei';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { Todo } from '../../types/Todo';
import * as THREE from 'three';

interface TaskFormProps {
  position: [number, number, number];
  width: number;
  height: number;
  onSubmit: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
}

export const TaskForm = ({
  position,
  width,
  height,
  onSubmit,
  onCancel,
}: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit({
      title: title.trim(),
      completed,
    });
    setTitle('');
    setCompleted(false);
  };

  return (
    <group position={position}>
      {/* Фон формы */}
      <mesh
        geometry={new THREE.PlaneGeometry(width, height)}
        material={new THREE.MeshStandardMaterial({
          color: '#ffffff',
          side: THREE.DoubleSide,
        })}
      />
      
      {/* Заголовок */}
      <Text
        position={[0, height / 2 - 0.5, 0.1]}
        fontSize={0.8}
        color="#000000"
        anchorX="center"
        anchorY="top"
      >
        Новая задача
      </Text>

      {/* Чекбокс */}
      <Checkbox
        position={[-width / 2 + 1, height / 2 - 2, 0.1]}
        checked={completed}
        onChange={setCompleted}
        size={0.8}
      />

      {/* Поле ввода */}
      <Input
        position={[-width / 2 + 5, height / 2 - 2, 0.1]}
        width={width - 3}
        height={0.8}
        value={title}
        onChange={setTitle}
        placeholder="Введите название задачи"
        fontSize={0.5}
      />

      {/* Кнопки */}
      <Button
        position={[-width / 4, -height / 2 + 1, 0.1]}
        size={[width / 3, 0.8, 0.1]}
        onClick={() => onCancel()}
        color="#f44336"
      >
        Отмена
      </Button>
      <Button
        position={[width / 4, -height / 2 + 1, 0.1]}
        size={[width / 3, 0.8, 0.1]}
        onClick={handleSubmit}
        disabled={!title.trim()}
      >
        Добавить
      </Button>
    </group>
  );
}; 