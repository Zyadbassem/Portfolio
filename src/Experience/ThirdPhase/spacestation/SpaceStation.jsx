import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import Block from "./block";
import { useControls } from "leva";

function SpaceStation({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  const model = useGLTF("./spacestation/spacestation.glb");
  const { x, y, z, xR, yR, zR } = useControls({
    x: { value: 0, min: -20, max: 20, step: 0.01 },
    y: { value: 0, min: -20, max: 20, step: 0.01 },
    z: { value: 0, min: -20, max: 20, step: 0.01 },
    xR: { value: 0, min: -2, max: 2, step: 0.01 },
    yR: { value: 0, min: -2, max: 2, step: 0.01 },
    zR: { value: 0, min: -2, max: 2, step: 0.01 },
  });

  // Precompute block positions and rotations to avoid recalculating each frame
  const blockConfigs = useMemo(
    () => [
      // {
      //   position: [x, y, z],
      //   rotation: [xR * Math.PI, yR * Math.PI, zR * Math.PI],
      // },
      {
        position: [2.31, -4.2, 6.18],
        rotation: [0 * Math.PI, 0.11 * Math.PI, 0 * Math.PI],
      },
      {
        position: [6.56, -4.2, 1.76],
        rotation: [0 * Math.PI, 0.39 * Math.PI, 0 * Math.PI],
      },
      {
        position: [4.49, -3.92, -5.17],
        rotation: [0 * Math.PI, 0.76 * Math.PI, 0 * Math.PI],
      },
      {
        position: [-2.18, -4.19, -6.33],
        rotation: [0 * Math.PI, 1.1 * Math.PI, 0 * Math.PI],
      },
      {
        position: [-6.86, -4.19, -1.4],
        rotation: [0 * Math.PI, 1.46 * Math.PI, 0 * Math.PI],
      },
      {
        position: [-4.18, -4.19, 5.56],
        rotation: [0 * Math.PI, 0.78 * Math.PI, 0 * Math.PI],
      },
    ],
    [x, y, z, xR, yR, zR]
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const elapsedTime = clock.getElapsedTime();
    const group = groupRef.current;

    // Optimize animation calculations
    group.rotation.x = Math.sin(elapsedTime) * 0.1;
    group.rotation.z = Math.cos(elapsedTime) * 0.1;
    group.rotation.y -= 0.005;
  });

  return (
    <group position={position} ref={groupRef}>
      <primitive object={model.scene} scale={[2, 2, 2]} />
      {blockConfigs.map((v, i) => (
        <Block key={i} position={v.position} rotation={v.rotation} />
      ))}
    </group>
  );
}

// Preload the model to avoid loading delays
useGLTF.preload("./spacestation/spacestation.glb");

export default SpaceStation;
