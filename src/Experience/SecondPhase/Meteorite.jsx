import { useGLTF } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";

import MeteoriteFlames from "./MeteoriteFlames";
import { useEffect } from "react";
import { useState } from "react";

function Meteorite() {
  const gltf = useGLTF("/meteorite/meteorite.glb");
  const rigidBodyRef = useRef();

  /** Flames for the meteorite */
  const { countHolder, maxWidth, maxHeight, maxDepth } = useControls("Flame", {
    countHolder: { value: 700, min: 100, max: 10000 },
    maxWidth: { value: 0.5, min: 0.1, max: 4 },
    maxHeight: { value: 7, min: 0.1, max: 10 },
    maxDepth: { value: 0.4, min: 0.1, max: 4 },
  });

  return (
    <RigidBody ref={rigidBodyRef} colliders={false}>
      <group>
        <primitive
          object={gltf.scene}
          scale={0.3}
          rotation={[0, 0, Math.PI * 0.25]}
          visible={true}
        />
        {/* Remove the static plane and replace with flame system */}
      </group>
      <MeteoriteFlames
        countHolder={countHolder}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        maxDepth={maxDepth}
      />
      <CylinderCollider args={[0.5, 0.4]} rotation={[0, 0, -0.7]} />
    </RigidBody>
  );
}

export default Meteorite;
