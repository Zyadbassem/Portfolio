import { Gltf } from "@react-three/drei";
import Satellites from "./Satellites";

function FirstPhase() {
  return (
    <>
      <group position={[0, 15, 0]}>
        <Satellites />
        {/* <Gltf src="/satellites.glb" position={[0, 0, 0]} scale={0.1} /> */}
      </group>
    </>
  );
}

export default FirstPhase;
