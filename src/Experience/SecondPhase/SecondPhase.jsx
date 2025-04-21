import SkillsText from "./SkillsText";

function SecondPhase({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <SkillsText />
    </group>
  );
}

export default SecondPhase;
