import Skill from "./Skill";
import SkillsText from "./SkillsText";

function SecondPhase({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <SkillsText />
      <Skill position={[-1, -3, 0]} />
    </group>
  );
}

export default SecondPhase;
