import AlienScene from "./AlienScene/AlienScene";
import BlackHole from "./BlackHole/BlackHole";
import Contact from "./Contact";
import GravityController from "./GravityController";

function FourthPhase({ position = [0, 0, 0], mobile = false }) {
  return (
    <group position={position}>
      <Contact position={mobile ? [0, 25, -10] : [5, 30, -10]} />
      <AlienScene position={mobile ? [0, 30, -10] : [-5, 30, -10]} />
      <GravityController
        position={mobile ? [0, 3, -10] : [0, 4, -10]}
        mobile={mobile}
      />
      <BlackHole
        position={mobile ? [0, 0, -10] : [0, 0, -10]}
        scale={mobile ? [1, 1, 1] : [2, 2, 2]}
        mobile={mobile}
      />
    </group>
  );
}

export default FourthPhase;
