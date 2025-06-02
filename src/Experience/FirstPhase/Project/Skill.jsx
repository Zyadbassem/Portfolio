import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Skill({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  logo = "reactlogo",
  radius = 0.5,
  offset = 2,
}) {
  // Set the ref
  const skillRef = useRef();

  // Animate Make it move around itself
  useFrame(({ clock }) => {
    const eTime = clock.elapsedTime + offset;

    // skillRef.current.rotation.x = Math.cos(0.5 * eTime);
    skillRef.current.rotation.y = Math.sin(0.5 * eTime);
    skillRef.current.rotation.z = Math.cos(0.5 * eTime);

    const positionX = Math.sin(1 * eTime) * radius;
    skillRef.current.position.x = positionX;

    const positionZ = Math.cos(1 * eTime) * radius;
    skillRef.current.position.z = positionZ;
  });

  const texture = useTexture(`./project_assets/logos/${logo}.png`, (t) => {
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;

    t.repeat.set(1, 1);

    t.needsUpdate = true;
  });
  return (
    <group position={position} ref={skillRef}>
      <mesh rotation={rotation}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshBasicMaterial map={texture} transparent={true} alphaTest={0.1} />
      </mesh>
    </group>
  );
}

export default Skill;
