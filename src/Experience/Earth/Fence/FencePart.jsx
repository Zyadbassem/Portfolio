import * as THREE from "three";

function FencePart({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const geometry = new THREE.PlaneGeometry(0.005, 0.18);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    color: "#636470",
  });
  return (
    <group rotation={rotation} position={position}>
      <mesh
        geometry={geometry}
        material={material}
        position={[0, 0, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        position={[0.02, 0.02, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        position={[0.04, 0.04, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        position={[-0.02, -0.02, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        position={[-0.04, -0.04, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        position={[0, 0, 0]}
        scale={[1, 0.6, 1]}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        scale={[1, 0.6, 1]}
        position={[0.02, -0.02, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        scale={[1, 0.6, 1]}
        position={[0.04, -0.04, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        scale={[1, 0.6, 1]}
        position={[0.06, -0.06, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        scale={[1, 0.6, 1]}
        position={[-0.02, 0.02, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        scale={[1, 0.6, 1]}
        position={[-0.04, 0.04, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
      <mesh
        geometry={geometry}
        material={material}
        scale={[1, 0.6, 1]}
        position={[-0.06, 0.06, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
    </group>
  );
}

export default FencePart;
