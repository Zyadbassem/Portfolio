import Satellites from "./Satellites";
import ArrowAndText from "./ArrowAndText";
import Projects from "./Projects";

function FirstPhase({ position = [0, 0, 0] }) {
  return (
    <>
      <group position={position}>
        <Satellites />
        <ArrowAndText text={`Projects => `} position={[0, 10, -30]} />
        <Projects position={[10, 10, -20]} />
      </group>
    </>
  );
}

export default FirstPhase;
