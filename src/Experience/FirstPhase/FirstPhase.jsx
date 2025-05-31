import Satellites from "./Satellites";
import ArrowAndText from "./ArrowAndText";
import Projects from "./Projects";

function FirstPhase({ position = [0, 0, 0], mobile = false }) {
  return (
    <>
      <group position={position}>
        <Satellites mobile={mobile} />
        <ArrowAndText
          text={`Projects => `}
          position={[0, 10, -30]}
          mobile={mobile}
        />
        <Projects
          position={mobile ? [0, 10, -20] : [10, 10, -20]}
          mobile={mobile}
        />
      </group>
    </>
  );
}

export default FirstPhase;
