import Moon from "./Moon";
import Skill from "./Skill";
import SkillsText from "./SkillsText";

function SecondPhase({ position = [0, 0, 0] }) {
  const skills = [
    {
      textureUrl: "expressjslogo.png",
      position: [-3.5, -1.5, 0],
    },
    {
      textureUrl: "jslogo.png",
      position: [-2.5, -1.5, 0],
    },
    {
      textureUrl: "htmllogo.png",
      position: [-1.5, -1.5, 0],
    },
    {
      textureUrl: "reactlogo.png",
      position: [-0.5, -1.5, 0],
    },
    {
      textureUrl: "threelogo.png",
      position: [0.5, -1.5, 0],
    },
    {
      textureUrl: "djangologo.png",
      position: [1.5, -1.5, 0],
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
      <Moon position={[-10, -10, -20]} />
    </group>
  );
}

export default SecondPhase;
