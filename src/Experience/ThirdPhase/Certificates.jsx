import { Html } from "@react-three/drei";

function Certificates({ position = [0, 0, 0] }) {
  return (
    <Html transform position={position}>
      <div
        style={{
          width: "500px",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          padding: "10px",
          border: "white 1px solid",
          borderRadius: "5px",
        }}
      >
        <h1
          style={{
            fontFamily: "Kumar One, serif",
            color: "white",
            fontSize: "30px",
            paddingBottom: "20px",
            marginLeft: "20px",
            borderBottom: "1px solid white",
          }}
        >
          Certificates & Courses
        </h1>
        <ul>
          <li style={{ color: "white", margin: "0 auto 20px 0" }}>
            Bachelor of Information technology (in progress)
          </li>
          <li style={{ color: "white", margin: "0 auto 20px 0" }}>
            CS50 & CS50 Web
          </li>
          <li style={{ color: "white", margin: "0 auto 20px 0" }}>
            Three.js journey by Bruno Simon
          </li>
          <li style={{ color: "white", margin: "0 auto 20px 0" }}>
            Responsive web designing from freeCodeCamp
          </li>
        </ul>
      </div>
    </Html>
  );
}

export default Certificates;
