import { useState, useEffect } from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface InputProps {
  position: [number, number, number];
  width: number;
  height: number;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  fontSize?: number;
  maxLength?: number;
}

export const Input = ({
  position,
  width,
  height,
  value,
  onChange,
  placeholder = '',
  fontSize = 0.5,
  maxLength = 100,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFocused) return;

      if (event.key === 'Backspace') {
        onChange(value.slice(0, -1));
      } else if (event.key === 'Enter') {
        setIsFocused(false);
      } else if (event.key.length === 1 && value.length < maxLength) {
        onChange(value + event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocused, value, onChange, maxLength]);

  return (
    <group position={position}>
      {/* Фон поля ввода */}
      <mesh
        onClick={() => setIsFocused(true)}
        geometry={new THREE.PlaneGeometry(width, height)}
        material={new THREE.MeshStandardMaterial({
          color: isFocused ? '#e3f2fd' : '#ffffff',
          side: THREE.DoubleSide,
        })}
      />

      {/* Рамка */}
      <mesh
        geometry={new THREE.PlaneGeometry(width + 0.1, height + 0.1)}
        material={new THREE.MeshBasicMaterial({
          color: isFocused ? '#2196f3' : '#bdbdbd',
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.5,
        })}
      />

      {/* Текст */}
      <Text
        position={[-width / 2 + 0.2, 0, 0.1]}
        fontSize={fontSize}
        color={value ? '#000000' : '#757575'}
        maxWidth={width - 0.4}
        anchorX="left"
        anchorY="middle"
      >
        {value || placeholder}
      </Text>

      {/* Курсор */}
      {isFocused && (
        <mesh position={[-width / 2 + 0.2 + (value.length * fontSize * 0.6), 0, 0.2]}>
          <planeGeometry args={[0.1, height * 0.8]} />
          <meshBasicMaterial color="#2196f3" />
        </mesh>
      )}
    </group>
  );
}; 