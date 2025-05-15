import { CuboidCollider, RigidBody } from "@react-three/rapier";
import desertFrag from "./desertfrag.glsl";
import desertver from "./desertver.glsl";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Desert({ position }) {
  const desRef = useRef();
  useFrame((frame) => {
    desRef.current.position.x = frame.camera.position.x;
  });
  const uniforms = {
    width: {
      value: 1.0,
    },
    height: {
      value: 0.05,
    },
    depth: {
      value: 1.0,
    },
    u_resolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
  };
  return (
    <>
      <RigidBody colliders={false} type="fixed" position={position}>
        <CuboidCollider args={[10, 0.1, 5]} />
      </RigidBody>
      <group>
        <mesh scale={[15, 1, 10]} ref={desRef}>
          <boxGeometry
            args={[
              uniforms.width.value,
              uniforms.height.value,
              uniforms.depth.value,
              50,
              10,
              50,
            ]}
          />
          <shaderMaterial
            vertexShader={desertver}
            fragmentShader={desertFrag}
            uniforms={uniforms}
            wireframe={false}
          />
        </mesh>
      </group>
    </>
  );
}

export default Desert;
