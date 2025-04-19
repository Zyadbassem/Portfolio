import { useMemo } from "react";
import * as THREE from "three";

function Stars() {
  const starGeometry = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.2) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      sizes[i] = Math.random() * 5 + 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1)); // custom attribute

    return geometry;
  }, []);
  return (
    <points geometry={starGeometry} position={[0, 10, -20]}>
      <pointsMaterial size={0.02} color={0xffffff} />
    </points>
  );
}

export default Stars;
