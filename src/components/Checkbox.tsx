import { ThreeEvent } from '@react-three/fiber';
import { useRef } from 'react';
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
  const meshRef = useRef<THREE.Mesh>(null);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onChange(!checked);
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        geometry={new THREE.BoxGeometry(size, size, size)}
        material={new THREE.MeshStandardMaterial({
          color: checked ? '#4CAF50' : '#9E9E9E',
          metalness: 0.5,
          roughness: 0.2,
        })}
      />
    </group>
  );
}; 