import Meteorites from "./Meteorites";
import Moon from "./Moon";
import Skills from "./Skills";

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
      <Meteorites position={[10, 10, 0]} count={5} />
      <Skills position={[-12, -10, -30]} />
      <Moon position={[10, -10, -25]} />
    </group>
  );
}

export default SecondPhase;
