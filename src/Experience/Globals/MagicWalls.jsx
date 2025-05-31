import { CuboidCollider, RigidBody } from "@react-three/rapier";

function MagicWalls({ mobile }) {
  return (
    <>
      <RigidBody
        type="fixed"
        colliders={false}
        position={[mobile ? 5 : 15, 70, 0]}
      >
        <CuboidCollider args={[1, 70, 1]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders={false}
        position={[mobile ? -5 : -15, 70, 0]}
      >
        <CuboidCollider args={[1, 70, 1]} />
      </RigidBody>
    </>
  );
}

export default MagicWalls;
