import { Html } from "@react-three/drei";

function Certificates({ position = [0, 0, 0], mobile }) {
  return (
    <Html transform position={position}>
      <div
        style={{
          width: mobile ? "350px" : "500px",
          height: mobile ? "500px" : "50vh",
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
            fontSize: mobile ? "25px" : "30px",
            paddingBottom: "20px",
            marginLeft: "20px",
            borderBottom: "1px solid white",
          }}
        >
          Certificates & Courses
        </h1>
        <ul>
          <li
            style={{
              color: "white",
              margin: "0 auto 20px 0",
              fontSize: mobile ? "15px" : "20px",
            }}
          >
            Bachelor of Information technology (in progress)
          </li>
          <li
            style={{
              color: "white",
              margin: "0 auto 20px 0",
              fontSize: mobile ? "15px" : "20px",
            }}
          >
            CS50 & CS50 Web
          </li>
          <li
            style={{
              color: "white",
              margin: "0 auto 20px 0",
              fontSize: mobile ? "15px" : "20px",
            }}
          >
            Three.js journey by Bruno Simon
          </li>
          <li
            style={{
              color: "white",
              margin: "0 auto 20px 0",
              fontSize: mobile ? "15px" : "20px",
            }}
          >
            Responsive web designing from freeCodeCamp
          </li>
        </ul>
      </div>
    </Html>
  );
}

export default Certificates;
