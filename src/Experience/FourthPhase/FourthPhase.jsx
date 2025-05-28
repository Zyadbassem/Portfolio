import BlackHole from "./BlackHole/BlackHole";

function FourthPhase({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <BlackHole position={[15, 0, -40]} scale={[5, 5, 5]} />
    </group>
  );
}

export default FourthPhase;
