import { useGLTF } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef, useEffect, useMemo } from "react";
import MeteoriteFlames from "./MeteoriteFlames";

function Meteorite({
  position = [0, 0, 0],
  initialImpulse = 1,
  rotation = [0, 0, 0],
  onRef = () => {},
}) {
  // load the model and clone for each meteorite
  const { scene } = useGLTF("/meteorite/meteorite.glb");
  const model = useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  // create a ref for the rigid body
  const rigidBodyRef = useRef();

  /** FLAMES CONTROLLER */
  const { countHolder, maxWidth, maxHeight, maxDepth, speed } = {
    countHolder: 1000,
    maxWidth: 0.5,
    maxHeight: 5,
    maxDepth: 0.4,
    speed: 0.1,
  };

  // Expose the ref to parent component
  useEffect(() => {
    if (rigidBodyRef.current) {
      onRef(rigidBodyRef);
      rigidBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 });
      rigidBodyRef.current.setAngvel({ x: 0, y: 0, z: 0 });
      // Apply initial impulse
      rigidBodyRef.current.applyImpulse({
        x: -initialImpulse,
        y: -initialImpulse,
        z: 0,
      });
    }
  }, [onRef, initialImpulse]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders={false}
      rotation={rotation}
      position={position}
    >
      <group>
        <primitive
          object={model}
          scale={0.3}
          rotation={[0, 0, Math.PI * 0.25]}
          visible={true}
        />
      </group>
      <MeteoriteFlames
        countHolder={countHolder}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        maxDepth={maxDepth}
        speed={speed}
        position={[1.8, 1.8, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
        initialImpulse={initialImpulse}
        secRot={rotation}
      />
      <CylinderCollider args={[0.5, 0.4]} rotation={[0, 0, -0.7]} />
    </RigidBody>
  );
}

// Preload the model once to improve performance
useGLTF.preload("/meteorite/meteorite.glb");

export default Meteorite;
