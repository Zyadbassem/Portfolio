import { Gltf } from "@react-three/drei";
import Satellites from "./Satellites";
import ArrowAndText from "../Globals/ArrowAndText";
import Projects from "./Projects";

function FirstPhase() {
  return (
    <>
      <group position={[0, 15, 0]}>
        <Satellites />
        <ArrowAndText text={`Projects => `} position={[-12, 10, -25]} />
        <Projects position={[5, 10, -10]} />
      </group>
    </>
  );
}

export default FirstPhase;
