import { CuboidCollider, RigidBody } from "@react-three/rapier";

function MagicWalls() {
  return (
    <>
      <RigidBody type="fixed" colliders={false} position={[7.5, 10, 0]}>
        <CuboidCollider args={[1, 10, 4.5]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[-7.5, 10, 0]}>
        <CuboidCollider args={[1, 10, 4.5]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[0, 20.5, 0]}>
        <CuboidCollider args={[7, 0.5, 5]} />
      </RigidBody>
    </>
  );
}

export default MagicWalls;
