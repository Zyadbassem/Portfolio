import * as THREE from "three";
import { Cloud } from "@react-three/drei";

function Clouds({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Cloud
        scale={1}
        color={new THREE.Color("#48556a")}
        position={[-5, -1, 0]}
        opacity={1}
      />

      <Cloud
        position={[4, 1, 5]}
        scale={0.8}
        color={new THREE.Color("#2c3f5f")}
        opacity={1}
      />
      <Cloud
        position={[-3, 3, -0]}
        scale={0.8}
        color={new THREE.Color("#35435c")}
        opacity={1}
      />
    </group>
  );
}

export default Clouds;
