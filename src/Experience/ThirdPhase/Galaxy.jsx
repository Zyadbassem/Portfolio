import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import fragmentShader from "./shaders/galaxyfrag.glsl";
import vertexShader from "./shaders/galaxyver.glsl";
import { useFrame } from "@react-three/fiber";

function Galaxy({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  inColor = "#fff",
  outColor = "#000",
  spinning = 1,
}) {
  const galaxyRef = useRef();
  const {
    count,
    radius,
    branches,
    spin,
    randomnessPow,
    insideColor,
    outsideColor,
  } = {
    count: 40000,
    radius: 11,
    branches: 3,
    spin: spinning,
    randomnessPow: 5,
    insideColor: inColor,
    outsideColor: outColor,
  };

  const uniforms = {
    u_time: {
      value: 0,
    },
  };
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorInside = new THREE.Color(insideColor);
    const colorOutside = new THREE.Color(outsideColor);
    const speed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radiusCalc = Math.random() * radius;
      const spinAngle = radiusCalc * spin;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;

      const randomX =
        Math.pow(Math.random(), randomnessPow) * (Math.random() < 0.5 ? -1 : 1);
      const randomY =
        Math.pow(Math.random(), randomnessPow) * (Math.random() < 0.5 ? -1 : 1);
      const randomZ =
        Math.pow(Math.random(), randomnessPow) * (Math.random() < 0.5 ? -1 : 1);

      positions[i3] = Math.cos(branchAngle + spinAngle) * radiusCalc + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] =
        Math.sin(branchAngle + spinAngle) * radiusCalc + randomZ;

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radiusCalc / radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      speed[i] = Math.random() - 0.5;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("speed", new THREE.BufferAttribute(speed, 1));
    return geometry;
  }, [count, radius, branches, spin, randomnessPow, insideColor, outsideColor]);

  const material = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: uniforms,
    });

    return material;
  }, [vertexShader, fragmentShader]);

  useFrame(({ clock }) => {
    material.uniforms.u_time.value = clock.getElapsedTime();
    galaxyRef.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points
      material={material}
      geometry={geometry}
      ref={galaxyRef}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

export default Galaxy;
