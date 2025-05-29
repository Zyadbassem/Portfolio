import { Html } from "@react-three/drei";

function Skills({ position = [0, 0, 0] }) {
  return (
    <Html transform position={position} raycast={false}>
      <div
        style={{
          width: "500px",
          height: "50vh",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "10px",
          border: "white 1px solid",
          borderRadius: "5px",
        }}
      >
        <h1
          style={{
            fontFamily: "Kumar One, serif",
            color: "white",
            fontSize: "50px",
          }}
        >
          Skills
        </h1>
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="/project_assets/logos/djangologo.png"
              style={{ width: "50px", margin: "20px", height: "50px" }}
            />
            <img
              src="/project_assets/logos/expressjslogo.png"
              style={{ width: "80px", margin: "20px" }}
            />
            <img
              src="/project_assets/logos/reactlogo.png"
              style={{ width: "50px", margin: "20px", height: "50px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/project_assets/logos/threelogo.png"
              style={{ width: "50px", margin: "20px", height: "50px" }}
            />
            <img
              src="/project_assets/logos/htmllogo.png"
              style={{ width: "50px", margin: "20px", height: "50px" }}
            />
          </div>
        </div>
      </div>
    </Html>
  );
}

export default Skills;
