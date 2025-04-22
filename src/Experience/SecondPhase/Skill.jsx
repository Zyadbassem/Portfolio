import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";

function Skill({ position = [0, 0, 0], texture = "djangologo.png" }) {
  const mapTexture = useTexture(`/project_assets/logos/${texture}`);

  useEffect(() => {
    if (mapTexture) {
      mapTexture.wrapS = mapTexture.wrapT = THREE.RepeatWrapping;
      mapTexture.repeat.set(2, 1);
      mapTexture.needsUpdate = true;
    }
  }, [mapTexture]);

  return (
    <RigidBody colliders="ball" position={position}>
      <mesh scale={0.25}>
        <sphereGeometry />
        {mapTexture && <meshBasicMaterial map={mapTexture} />}
      </mesh>
    </RigidBody>
  );
}

export default Skill;
