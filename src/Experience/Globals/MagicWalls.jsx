import { CuboidCollider, RigidBody } from "@react-three/rapier";

function MagicWalls() {
  return (
    <>
      <RigidBody type="fixed" colliders={false} position={[15, 70, 0]}>
        <CuboidCollider args={[1, 70, 1]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[-15, 70, 0]}>
        <CuboidCollider args={[1, 70, 1]} />
      </RigidBody>
      {/* <RigidBody type="fixed" colliders={false} position={[0, 10, -6]}>
        <CuboidCollider args={[15, 10, 1]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[0, 10, 6]}>
        <CuboidCollider args={[15, 10, 1]} />
      </RigidBody> */}
    </>
  );
}

export default MagicWalls;
