import { Html } from "@react-three/drei";

function GravityController({ position = [0, 0, 0] }) {
  return (
    <Html transform position={position} raycast={true}>
      <div
        style={{
          width: "auto",
          minHeight: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          padding: "10px",
          gap: "20px",
          cursor: "pointer",
        }}
      >
        <h1
          style={{
            fontFamily: "Kumar One, serif",
            color: "white",
            fontSize: "10px",
            margin: "0 30px",
          }}
        >
          H Key will toggle the hole gravity
        </h1>
      </div>
    </Html>
  );
}

export default GravityController;
