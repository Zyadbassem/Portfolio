import { useMemo } from "react";
import * as THREE from "three";

function BarbedWire({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  width = 120,
}) {
  const count = 20000;
  const length = width;
  const radius = 10;
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3] = (Math.random() - 0.5) * length;
      array[i3 + 1] = Math.sin(array[i3] * radius);
      array[i3 + 2] = Math.cos(array[i3] * radius);
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(array, 3));
    return geometry;
  }, [count, radius, length]);

  const material = useMemo(() => {
    const material = new THREE.PointsMaterial({ size: 0.01, color: "#656565" });
    return material;
  });

  return (
    <points
      rotation={rotation}
      position={position}
      scale={scale}
      geometry={geometry}
      material={material}
    />
  );
}

export default BarbedWire;
