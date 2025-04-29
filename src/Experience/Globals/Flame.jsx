import { useMemo } from "react";
import * as THREE from "three";
import fragmentShader from "./shaders/flamefragment.glsl";
import vertexShader from "./shaders/flamevertex.glsl";
import { useFrame } from "@react-three/fiber";

function Flame({ position = [0, -0.05, 0.1], visible = true }) {
  const count = 500;
  const width = 0.05;
  const height = 0.4;
  const depth = 0.05;
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speedArr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * depth;

      speedArr[i] = Math.random();
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("speed", new THREE.BufferAttribute(speedArr, 1));
    console.log(geometry);
    return geometry;
  }, [count, width, height, depth]);
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        width: {
          value: width,
        },
        height: {
          value: height,
        },
        u_time: {
          value: 0.0,
        },
      },
      transparent: true,
    });
  }, [vertexShader, fragmentShader]);

  useFrame(({ clock }) => {
    material.uniforms.u_time.value = clock.elapsedTime;
    material.needsUpdate = true;
  });
  return (
    <points
      material={material}
      geometry={geometry}
      position={position}
      rotation={[0, 0, Math.PI]}
    />
  );
}

export default Flame;
