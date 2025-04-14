import BuildingBlock from "./BuildingBlock";
import { RigidBody } from "@react-three/rapier";

function Station() {
  return (
    <group scale={1.5} positionY={0.5}>
      <RigidBody type="fixed" position={[0, 0, 0]}>
        <BuildingBlock position={[0.2, 0.5, 0]} />
        <BuildingBlock position={[0.2, 0.4, 0]} />
        <BuildingBlock position={[0.2, 0.3, 0]} />
        <BuildingBlock position={[0.2, 0.2, 0]} />
        <BuildingBlock position={[0.2, 0.1, 0]} />
        <BuildingBlock position={[0.2, 0, 0]} />
      </RigidBody>
      <RigidBody position={[0, 0, 0.02]} type="fixed">
        <mesh>
          <cylinderGeometry args={[0.07, 0.1, 0.02, 32]} />
          <meshStandardMaterial color="#afb1be" />
        </mesh>
      </RigidBody>
    </group>
  );
}

export default Station;
