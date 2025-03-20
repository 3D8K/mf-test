import { useState } from 'react';
import { Text } from '@react-three/drei';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Todo, Priority } from '../../types/Todo';
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
  const [priority, setPriority] = useState<Priority>('low');

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit({
      title: title.trim(),
      completed: false,
      priority,
    });
    setTitle('');
    setPriority('low');
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

      {/* Поле ввода */}
      <Input
        position={[-width / 2 + 5, height / 2 - 2, 0.1]}
        width={width - 1}
        height={0.8}
        value={title}
        onChange={setTitle}
        placeholder="Введите название задачи"
        fontSize={0.5}
      />

      {/* Группа кнопок приоритета */}
      <group position={[0, height / 2 - 3, 0.1]}>
        <Button
          position={[-width / 3, 0, 0]}
          size={[width / 4, 0.8, 0.1]}
          onClick={() => setPriority('low')}
          color={priority === 'low' ? '#4CAF50' : '#9E9E9E'}
        >
          Низкий
        </Button>
        <Button
          position={[0, 0, 0]}
          size={[width / 4, 0.8, 0.1]}
          onClick={() => setPriority('medium')}
          color={priority === 'medium' ? '#FFC107' : '#9E9E9E'}
        >
          Средний
        </Button>
        <Button
          position={[width / 3, 0, 0]}
          size={[width / 4, 0.8, 0.1]}
          onClick={() => setPriority('high')}
          color={priority === 'high' ? '#F44336' : '#9E9E9E'}
        >
          Высокий
        </Button>
      </group>

      {/* Группа кнопок управления */}
      <group position={[0, -height / 2 + 1, 0.1]}>
        <Button
          position={[-width / 4, 0, 0]}
          size={[width / 3, 0.8, 0.1]}
          onClick={() => onCancel()}
          color="#f44336"
        >
          Отмена
        </Button>
        <Button
          position={[width / 4, 0, 0]}
          size={[width / 3, 0.8, 0.1]}
          onClick={handleSubmit}
          disabled={!title.trim()}
        >
          Добавить
        </Button>
      </group>
    </group>
  );
}; 