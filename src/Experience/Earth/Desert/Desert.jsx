import { CuboidCollider, RigidBody } from "@react-three/rapier";
import desertFrag from "./desertfrag.glsl";
import desertver from "./desertver.glsl";
import * as THREE from "three";

function Desert({ position }) {
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
    <RigidBody colliders={false} type="fixed" position={position}>
      <group>
        <mesh scale={[20, 1, 10]}>
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
      <CuboidCollider args={[10, 0.1, 5]} />
    </RigidBody>
  );
}

export default Desert;
