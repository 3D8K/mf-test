import { useState } from 'react';
import * as THREE from 'three';

interface CheckboxProps {
  position: [number, number, number];
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
}

export const Checkbox = ({
  position,
  checked,
  onChange,
  size = 1,
}: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <group position={position}>
      {/* Фон чекбокса */}
      <mesh
        onClick={() => onChange(!checked)}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        geometry={new THREE.BoxGeometry(size, size, 0.1)}
        material={new THREE.MeshStandardMaterial({
          color: checked ? '#2196f3' : '#ffffff',
          side: THREE.DoubleSide,
          metalness: 0.1,
          roughness: 0.8,
        })}
      />

      {/* Рамка */}
      <mesh
        geometry={new THREE.BoxGeometry(size + 0.05, size + 0.05, 0.15)}
        material={new THREE.MeshBasicMaterial({
          color: checked ? '#1976d2' : isHovered ? '#9e9e9e' : '#bdbdbd',
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.5,
        })}
      />

      {/* Галочка */}
      {checked && (
        <group position={[0, 0, 0.12]}>
          <mesh rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[size * 0.7, size * 0.12, 0.05]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[size * 0.7, size * 0.12, 0.05]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>
      )}
    </group>
  );
}; 