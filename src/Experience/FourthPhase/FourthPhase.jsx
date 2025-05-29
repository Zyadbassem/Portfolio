import BlackHole from "./BlackHole/BlackHole";

function FourthPhase({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <BlackHole position={[1, 0, -10]} scale={[2, 2, 2]} />
    </group>
  );
}

export default FourthPhase;
