import { CuboidCollider, RigidBody } from "@react-three/rapier";

function MagicWalls() {
  return (
    <>
      <RigidBody type="fixed" colliders={false} position={[15, 10, 0]}>
        <CuboidCollider args={[1, 10, 4.5]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[-15, 10, 0]}>
        <CuboidCollider args={[1, 10, 4.5]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[0, 10, -6]}>
        <CuboidCollider args={[15, 10, 1]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[0, 20.5, 0]}>
        <CuboidCollider args={[20, 0.5, 5]} />
      </RigidBody>
    </>
  );
}

export default MagicWalls;
