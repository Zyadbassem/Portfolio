import Meteorites from "./Meteorites";
import Moon from "./Moon";
import Skills from "./Skills";

function SecondPhase({ position = [0, 0, 0], mobile }) {
  return (
    <group position={position}>
      <Meteorites position={[10, 10, 0]} count={6} />
      <Skills
        position={mobile ? [0, -10, -30] : [-10, -10, -30]}
        mobile={mobile}
      />
      {mobile ? null : <Moon position={[13, -10, -25]} />}
    </group>
  );
}

export default SecondPhase;
