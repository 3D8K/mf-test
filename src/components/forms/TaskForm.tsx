import { useState, useCallback, useMemo } from 'react';
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

  const adjustedHeight = useMemo(() => height + 2, [height]);
  const spacing = useMemo(() => adjustedHeight / 5, [adjustedHeight]); // Равномерные отступы

  const handleSubmit = useCallback(() => {
    if (!title.trim()) return;
    onSubmit({
      title: title.trim(),
      completed: false,
      priority,
    });
    setTitle('');
    setPriority('low');
  }, [title, priority, onSubmit]);

  return (
    <group position={position}>
      {/* Фон формы */}
      <mesh
        geometry={useMemo(() => new THREE.PlaneGeometry(width, adjustedHeight), [width, adjustedHeight])}
        material={useMemo(
          () =>
            new THREE.MeshStandardMaterial({
              color: '#ffffff',
              side: THREE.DoubleSide,
            }),
          []
        )}
      />

      {/* Заголовок */}
      <Text
        position={[0, adjustedHeight / 2 - spacing, 0.1]}
        fontSize={0.8}
        color="#000000"
        anchorX="center"
        anchorY="middle"
      >
        Новая задача
      </Text>

      {/* Поле ввода */}
      <Input
        position={[0, adjustedHeight / 2 - 2 * spacing, 0.1]}
        width={width - 2}
        height={0.8}
        value={title}
        onChange={setTitle}
        placeholder="Введите название задачи"
        fontSize={0.5}
        anchorX="center"
      />

      {/* Группа кнопок приоритета */}
      <group position={[0, adjustedHeight / 2 - 3 * spacing, 0.1]}>
        {(['low', 'medium', 'high'] as Priority[]).map((level, index) => (
          <Button
            key={level}
            position={[(-1 + index) * (width / 3), 0, 0]}
            size={[width / 4, 0.8, 0.1]}
            onClick={() => setPriority(level)}
            color={priority === level ? (level === 'low' ? '#4CAF50' : level === 'medium' ? '#FFC107' : '#F44336') : '#9E9E9E'}
          >
            {level === 'low' ? 'Низкий' : level === 'medium' ? 'Средний' : 'Высокий'}
          </Button>
        ))}
      </group>

      {/* Группа кнопок управления */}
      <group position={[0, adjustedHeight / 2 - 4 * spacing, 0.1]}>
        <Button
          position={[-width / 4, 0, 0]}
          size={[width / 3, 0.8, 0.1]}
          onClick={onCancel}
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
