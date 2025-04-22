import Skill from "./Skill";
import SkillsText from "./SkillsText";

function SecondPhase({ position = [0, 0, 0] }) {
  const skills = [
    {
      textureUrl: "expressjslogo.png",
      position: [-6, -3, 0],
    },
    {
      textureUrl: "jslogo.png",
      position: [-4, -3, 0],
    },
    {
      textureUrl: "htmllogo.png",
      position: [-2, -3, 0],
    },
    {
      textureUrl: "reactlogo.png",
      position: [0, -3, 0],
    },
    {
      textureUrl: "threelogo.png",
      position: [2, -3, 0],
    },
    {
      textureUrl: "djangologo.png",
      position: [4, -3, 0],
    },
  ];
  return (
    <group position={position}>
      <SkillsText />
      {skills.map((skill, index) => (
        <Skill
          key={index}
          position={skill.position}
          texture={skill.textureUrl}
        />
      ))}
    </group>
  );
}

export default SecondPhase;
