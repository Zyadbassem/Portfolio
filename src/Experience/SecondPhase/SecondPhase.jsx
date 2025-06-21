import Meteorites from "./Meteorites";
import Moon from "./Moon";
import Skills from "./Skills";
import SpaceShipsScene from "./Battle/SpaceShipsScene";

function SecondPhase({ position = [0, 0, 0], mobile }) {
  return (
    <group position={position}>
      <Meteorites position={[5, 10, 0]} count={3} />
      <SpaceShipsScene />
    </group>
  );
}

export default SecondPhase;
