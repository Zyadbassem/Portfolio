import { useGLTF } from "@react-three/drei";
import { BallCollider, CylinderCollider, RigidBody } from "@react-three/rapier";
import { useControls } from "leva";

function Meteorite() {
  const gltf = useGLTF("/meteorite/meteorite.glb");
  const { xRot, yRot, zRot } = useControls("Meteorite", {
    xRot: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    yRot: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    zRot: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  return (
    <RigidBody colliders={false}>
      <group>
        <primitive
          object={gltf.scene}
          scale={0.3}
          rotation={[0, 0, Math.PI * 0.25]}
        />
        <mesh visible={true} position={[0.25, 0.25, 0]}>
          <planeGeometry args={[1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
      <CylinderCollider args={[0.5, 0.4]} rotation={[0, 0, -0.7]} />
    </RigidBody>
  );
}

export default Meteorite;
