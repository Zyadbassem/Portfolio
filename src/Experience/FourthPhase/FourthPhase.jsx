import BlackHole from "./BlackHole/BlackHole";
import Contact from "./Contact";
import GravityController from "./GravityController";

function FourthPhase({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Contact position={[4, 20, -30]} />
      <GravityController position={[4, 4, -10]} />
      <BlackHole position={[4, 0, -10]} scale={[2, 2, 2]} />
    </group>
  );
}

export default FourthPhase;
