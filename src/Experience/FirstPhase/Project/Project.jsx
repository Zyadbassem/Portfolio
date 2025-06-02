import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import Skill from "./Skill";
import { Html } from "@react-three/drei";
function Project({
  projectName = "outfit oasis",
  projectDescription = "",
  projectImage = "",
  skills = [
    {
      logo: "reactlogo",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      radius: 1,
      offset: 1,
    },
  ],
  planet = "moon",
  radius = 0.5,
  position = [0, 0, 0],
  projectLink = "https://solarsysytembyzyad.vercel.app/",
}) {
  const texture = useTexture(`./project_assets/projects/${planet}.jpg`);
  return (
    <group position={position}>
      <Html transform position={[0, 3.5, 0]}>
        <a
          style={{
            width: "auto",
            padding: "3px 10px",
            border: "1px solid white",
            borderRadius: "5px",
            maxWidth: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textDecoration: "none",
          }}
          href={projectLink}
          target="_blank"
        >
          <div
            style={{
              width: "100%",
              padding: "3px 10px",
              display: "flex",
              gap: "auto",
              margin: "10px",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <img
              src={`./project_assets/${projectImage}`}
              style={{
                width: "100px",
                height: "60px",
                border: "1px solid rgb(48, 71, 96)",
              }}
            />
            <h1
              style={{
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {projectName}
            </h1>
          </div>

          <p
            style={{
              color: "white",
              fontFamily: "sans-serif",
              fontSize: "8px",
              fontWeight: "300",
            }}
          >
            {projectDescription}
          </p>
        </a>
      </Html>
      <mesh>
        <sphereGeometry args={[radius]} />
        <meshToonMaterial map={texture} />
      </mesh>
      {skills.map(({ logo, position, rotation, radius, offset }) => {
        return (
          <Skill
            logo={logo}
            position={position}
            rotation={rotation}
            radius={radius}
            offset={offset}
          />
        );
      })}
    </group>
  );
}

export default Project;
