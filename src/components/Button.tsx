import { useState } from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface ButtonProps {
  position: [number, number, number];
  size: [number, number, number];
  onClick: () => void;
  children: string;
  color?: string;
  disabled?: boolean;
}

export const Button = ({
  position,
  size: [width, height, depth],
  onClick,
  children,
  color = '#4a90e2',
  disabled = false,
}: ButtonProps) => {
  const [textWidth, setTextWidth] = useState(0);

  // Рассчитываем минимальную ширину кнопки на основе текста
  const minWidth = Math.max(width, textWidth + 1); // Добавляем отступы по 0.5 с каждой стороны

  return (
    <group position={position}>
      <mesh
        onClick={disabled ? undefined : onClick}
        geometry={new THREE.BoxGeometry(minWidth, height, depth)}
        material={new THREE.MeshStandardMaterial({
          color: disabled ? '#cccccc' : color,
          metalness: 0.5,
          roughness: 0.2,
        })}
      >
        <Text
          position={[0, 0, 0.1]}
          fontSize={height * 0.4}
          color={disabled ? '#666666' : '#ffffff'}
          anchorX="center"
          anchorY="middle"
          onSync={(text) => {
            // Получаем ширину текста после его рендеринга
            const textWidth = text.geometry.boundingBox.max.x - text.geometry.boundingBox.min.x;
            setTextWidth(textWidth);
          }}
        >
          {children}
        </Text>
      </mesh>
    </group>
  );
}; 