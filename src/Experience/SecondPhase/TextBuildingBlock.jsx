import { RigidBody } from "@react-three/rapier";

function TextBuildingBlock({ position, geometry, material }) {
  return (
    <RigidBody position={position}>
      <mesh geometry={geometry} material={material} />
    </RigidBody>
  );
}

export default TextBuildingBlock;
