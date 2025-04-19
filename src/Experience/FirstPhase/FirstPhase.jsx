import Satellites from "./Satellites";
import ArrowAndText from "./ArrowAndText";
import Projects from "./Projects";

function FirstPhase() {
  return (
    <>
      <group position={[0, 15, 0]}>
        <Satellites />
        <ArrowAndText text={`Projects => `} position={[-12, 10, -25]} />
        <Projects position={[5, 11, -20]} />
      </group>
    </>
  );
}

export default FirstPhase;
