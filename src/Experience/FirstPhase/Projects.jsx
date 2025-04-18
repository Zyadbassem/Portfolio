import { Html } from "@react-three/drei";

function Projects({ position }) {
  return (
    <Html position={position} transform>
      <div style={{ color: "white", backgroundColor: "blue", width: "150px" }}>
        hey
      </div>
    </Html>
  );
}

export default Projects;
