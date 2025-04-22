import * as THREE from "three";
import { Cloud } from "@react-three/drei";

function Clouds({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Cloud
        scale={1}
        color={new THREE.Color("#33485f")}
        position={[-5, -1, 0]}
        opacity={0.8}
      />

      <Cloud
        position={[4, 1, 5]}
        scale={0.8}
        color={new THREE.Color("#304051")}
        opacity={0.6}
      />
      <Cloud
        position={[-3, 3, -0]}
        scale={0.8}
        color={new THREE.Color("#3b4c5f")}
        opacity={0.7}
      />
    </group>
  );
}

export default Clouds;
