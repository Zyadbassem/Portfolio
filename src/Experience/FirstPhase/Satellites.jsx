import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { useMemo } from "react";
import {
  CuboidCollider,
  CylinderCollider,
  RigidBody,
} from "@react-three/rapier";
function Satellites() {
  const gltf = useGLTF("/satellites.glb");
  const count = 5;
  const satellites = useMemo(() => {
    const clonedSatellites = [];
    for (let i = 0; i < count; i++) {
      const width = 20;
      const height = 10;
      const randomX = (Math.random() - 0.5) * width;
      const randomY = (Math.random() - 0.5) * height;
      const randomYRotation = Math.random() * Math.PI * 2;
      const randomZRotation = Math.random() * Math.PI * 2;
      clonedSatellites.push({
        clone: clone(gltf.scene),
        position: [randomX, randomY, 0],
        rotation: [0, randomYRotation, randomZRotation],
      });
    }
    return clonedSatellites;
  });

  return (
    <>
      {satellites.map((satellite, index) => (
        <RigidBody
          key={index}
          colliders={false}
          position={satellite.position}
          rotation={satellite.rotation}
        >
          <primitive key={index} object={satellite.clone} scale={0.3} />
          <CylinderCollider
            args={[0.9, 0.45]}
            position={[0.35, 0, -0.4]}
            rotation={[Math.PI * 0.45, 0, Math.PI * 0.2]}
          />
          <CuboidCollider
            args={[0.9, 0.05, 0.5]}
            position={[1.56, -0.11, 0.12]}
            rotation={[Math.PI * -2.58, Math.PI * 0.04, Math.PI * 0.83]}
          />
          <CuboidCollider
            args={[0.9, 0.05, 0.5]}
            position={[-0.77, -0.23, -1.31]}
            rotation={[Math.PI * -2.58, Math.PI * 0.04, Math.PI * 0.83]}
          />
        </RigidBody>
      ))}
    </>
  );
}

export default Satellites;
