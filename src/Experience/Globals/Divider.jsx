import { Html } from "@react-three/drei";

function Divider({ position, section = "Projects" }) {
  return (
    <Html position={position} transform>
      <h1
        style={{
          color: "white",
          font: "sans",
          fontSize: "15px",
        }}
      >
        {section}
      </h1>
    </Html>
  );
}

export default Divider;
