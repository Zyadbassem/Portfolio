import Satellites from "./Satellites";
import ArrowAndText from "./ArrowAndText";
import Projects from "./Projects";
import Project from "./Project/Project.jsx";

function FirstPhase({ position = [0, 0, 0], mobile = false }) {
  return (
    <>
      <group position={position}>
        <Satellites mobile={mobile} />
        {/* <ArrowAndText
          text={`Projects => `}
          position={[0, 10, -30]}
          mobile={mobile}
        />
        <Projects
          position={mobile ? [0, 10, -20] : [10, 10, -20]}
          mobile={mobile}
        /> */}
        <Project
          position={[-5, 0, -10]}
          radius={1.5}
          projectName="Solar System"
          projectDescription="First project I made using three js library. Simple but cool.  learnt three js basics with this project. Planets movement is paced on realistic movements (closer to the sun moves faster)"
          projectImage="solarSystem.png"
          projectLink="https://solarsysytembyzyad.vercel.app/"
          planet="moon"
          skills={[
            {
              logo: "csslogo",
              position: [0, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 0,
            },
            {
              logo: "jslogo",
              position: [1, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 1.5,
            },
            {
              logo: "threelogo",
              position: [1, 0, 1],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 3,
            },
            {
              logo: "htmllogo",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              radius: 2,
              offset: 4.5,
            },
          ]}
        />
      </group>
    </>
  );
}

export default FirstPhase;
