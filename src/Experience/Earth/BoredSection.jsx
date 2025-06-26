import { Html } from "@react-three/drei";

function BoredSection({ position = [0, 0, 0] }) {
  return (
    <Html transform position={position}>
      <a
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span style={{ fontSize: "5px" }}>You don't have time ?</span>
        <a
          style={{
            fontSize: "5px",
            padding: "10px 10px",
            border: "0.5px solid white",
          }}
        >
          Get my resume
        </a>
      </a>
    </Html>
  );
}

export default BoredSection;
