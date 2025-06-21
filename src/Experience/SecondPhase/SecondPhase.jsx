import Meteorites from "./Meteorites";
import SpaceShipsScene from "./Battle/SpaceShipsScene";
import HeadingForBattle from "./Battle/HeadingForBattle";

function SecondPhase({ position = [0, 0, 0], mobile }) {
  return (
    <group position={position}>
      <Meteorites position={[5, 10, 0]} count={3} />
      <SpaceShipsScene mobile={mobile} />
      <HeadingForBattle mobile={mobile} />
    </group>
  );
}

export default SecondPhase;
