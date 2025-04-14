import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { RigidBody } from "@react-three/rapier";

function Grass() {
  const { r, g, b } = useControls({
    r: { value: 0.1, min: 0, max: 1, step: 0.01 },
    g: { value: 1, min: 0, max: 1, step: 0.01 },
    b: { value: 0.1, min: 0, max: 1, step: 0.01 },
  });
  const instancedMesh = useRef();
  const instanceNumber = 60000;

  const vertexShader = `
    varying vec2 vUv;
    uniform float time;
    
    void main() {
      vUv = uv;
      
      // VERTEX POSITION
      
      vec4 mvPosition = vec4( position, 1.0 );
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      
      // DISPLACEMENT
      
      // here the displacement is made stronger on the blades tips.
      float dispPower = 1.0 - cos( uv.y * 3.1416 / 2.0 );
      
      float displacement = sin( mvPosition.z + time * 10.0 ) * ( 0.005 * dispPower);
      mvPosition.x += displacement;
      
      //
      
      vec4 modelViewPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * modelViewPosition;
    }
  `;

  const fragmentShader = `
  varying vec2 vUv;
  uniform vec3 baseColor;
  
  void main() {
    float clarity = ( vUv.y * 0.2 ) + 0.5;
    gl_FragColor = vec4( baseColor * clarity, 1 );
  }
  `;

  const uniforms = {
    time: {
      value: 0,
    },
    baseColor: { value: new THREE.Vector3(r, g, b) },
  };

  useEffect(() => {
    uniforms.baseColor.value.set(r, g, b);
  }, [r, g, b]);

  useLayoutEffect(() => {
    if (!instancedMesh.current) return;

    const dummy = new THREE.Object3D();
    const width = 13;
    const height = 9;

    for (let i = 0; i < instanceNumber; i++) {
      let z = (Math.random() - 0.5) * height;
      let x = (Math.random() - 0.5) * width;
      while (x > -0.5 && x < 0.5 && z > -0.5 && z < 0.5) {
        x = (Math.random() - 0.5) * width;
        z = (Math.random() - 0.5) * height;
      }
      dummy.position.set(x, 0, z);

      dummy.scale.setScalar(0.5 + Math.random() * 0.5);

      dummy.rotation.y = Math.random() * Math.PI;

      dummy.updateMatrix();
      instancedMesh.current.setMatrixAt(i, dummy.matrix);
    }

    // This line is crucial - you need to flag the instance matrix as needing an update
    instancedMesh.current.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame(({ clock }) => {
    uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <group>
      <instancedMesh args={[null, null, instanceNumber]} ref={instancedMesh}>
        {/* Create the geometry with proper positioning */}
        <planeGeometry args={[0.01, 0.2, 1, 1]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
      <RigidBody type="fixed" position={[0, -0.2, 0]} restitution={0.5}>
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[13, 0.2, 9, 1]} />
          <meshBasicMaterial color="#3f2219" opacity={0.5} />
        </mesh>
      </RigidBody>
    </group>
  );
}

export default Grass;
