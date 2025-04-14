import * as THREE from "three";

function BoxBuilder({ position, rotation = [0, 0, 0] }) {
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    color: "#afb1be",
  });
  return (
    <group position={position} rotation={rotation}>
      <mesh
        position={[0, 0.05, 0.001]}
        rotation={[0, 0, Math.PI / 2]}
        material={material}
      >
        <planeGeometry args={[0.01, 0.11]} />
      </mesh>
      <mesh position={[-0.05, 0, 0]} material={material}>
        <planeGeometry args={[0.01, 0.1]} />
      </mesh>
      <mesh position={[0.05, 0, 0]} material={material}>
        <planeGeometry args={[0.01, 0.1]} />
      </mesh>
      <mesh
        position={[0, 0, 0.001]}
        rotation={[0, 0, 0.76]}
        material={material}
      >
        <planeGeometry args={[0.01, 0.14]} />
      </mesh>
      <mesh
        position={[0, 0, 0.001]}
        rotation={[0, 0, -0.76]}
        material={material}
      >
        <planeGeometry args={[0.01, 0.14]} />
      </mesh>
    </group>
  );
}

export default BoxBuilder;
