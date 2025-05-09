import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Tambleweed({
  initialPosition = [0, 0.2, 0],
  xValue = 0.01,
  zValue = 0.03,
  max = 10,
}) {
  const tambleweedRef = useRef();
  const width = 1;
  const height = 0.5;
  const depth = 0.5;
  const count = 1000;
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positionArr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Random spherical coordinates
      const radius = Math.cbrt(Math.random()) * (depth / 2); // cbrt ensures uniform distribution inside the sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      // Convert to Cartesian coordinates
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positionArr[i * 3] = x;
      positionArr[i * 3 + 1] = y;
      positionArr[i * 3 + 2] = z;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionArr, 3)
    );
    return geometry;
  }, [width, height, depth, count]);

  useFrame(() => {
    if (
      tambleweedRef.current.position.x < -max ||
      tambleweedRef.current.position.x > max
    ) {
      tambleweedRef.current.position.x > 0
        ? (tambleweedRef.current.position.x = -max)
        : (tambleweedRef.current.position.x = max);
    } else {
      tambleweedRef.current.position.x -= xValue;
      tambleweedRef.current.rotation.z += zValue;
    }
  });

  return (
    <mesh geometry={geometry} ref={tambleweedRef} position={initialPosition}>
      <meshBasicMaterial color={"#4c301e"} wireframe={true} />
    </mesh>
  );
}

export default Tambleweed;
