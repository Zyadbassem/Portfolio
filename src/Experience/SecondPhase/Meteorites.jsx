import Meteorite from "./Meteorite";

function Meteorites({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Meteorite />
    </group>
  );
}

export default Meteorites;
