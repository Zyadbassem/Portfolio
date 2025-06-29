import { CuboidCollider, RigidBody } from "@react-three/rapier";

function MagicWalls({}) {
  return (
    <>
      <RigidBody type="fixed" colliders={false} position={[-5, 100, 0]}>
        <CuboidCollider args={[1, 100, 1]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[5, 100, 0]}>
        <CuboidCollider args={[1, 100, 1]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[0, 201, 0]}>
        <CuboidCollider args={[5, 1, 1]} />
      </RigidBody>
    </>
  );
}

export default MagicWalls;
