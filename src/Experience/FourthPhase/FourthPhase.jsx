import BlackHole from "./BlackHole/BlackHole";
import Contact from "./Contact";
import GravityController from "./GravityController";

function FourthPhase({ position = [0, 0, 0], mobile = false }) {
  return (
    <group position={position}>
      <Contact position={mobile ? [0, 20, -30] : [4, 20, -30]} />
      <GravityController
        position={mobile ? [0, 3, -10] : [4.3, 4, -10]}
        mobile={mobile}
      />
      <BlackHole
        position={mobile ? [0, 0, -10] : [4, 0, -10]}
        scale={mobile ? [1, 1, 1] : [2, 2, 2]}
        mobile={mobile}
      />
    </group>
  );
}

export default FourthPhase;
