import { Html } from "@react-three/drei";

function GravityController({ position = [0, 0, 0], mobile }) {
  const handleClick = () => {
    console.log("hhh");
    if (!mobile) return;

    const event = new Event("toggleTheHole");

    window.dispatchEvent(event);
  };
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
        onClick={handleClick}
      >
        <h1
          style={{
            fontFamily: "serif",
            color: "white",
            fontSize: "10px",
            margin: "0 30px",
            padding: "10px",
          }}
        >
          {mobile
            ? "click to toggle the hole gravity"
            : "H Key will toggle the hole gravity"}
        </h1>
      </div>
    </Html>
  );
}

export default GravityController;
