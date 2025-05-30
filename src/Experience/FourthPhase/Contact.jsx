import { Html } from "@react-three/drei";

function Contact({ position = [0, 0, 0] }) {
  return (
    <Html transform position={position} raycast={false}>
      <div
        style={{
          width: "500px",
          height: "50vh",
          minHeight: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          padding: "10px",
          border: "white 1px solid",
          borderRadius: "5px",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontFamily: "Kumar One, serif",
            color: "white",
            fontSize: "50px",
            margin: "0 30px",
          }}
        >
          Contact
        </h1>

        <div style={{ margin: "0 30px", color: "white", display: "flex" }}>
          LinkedIn:{" "}
          <a
            style={{ margin: "0 5px", color: "rgb(0, 166, 209)" }}
            href="https://www.linkedin.com/in/zeiad-salmoun-3774992a2"
            target="_blank"
          >
            Zeiad Salmoun
          </a>
        </div>
        <div style={{ margin: "0 30px", color: "white", display: "flex" }}>
          Email:{" "}
          <a
            style={{ margin: "0 5px", color: "rgb(0, 166, 209)" }}
            href="mailto:zyadbassem9090@gmail.com"
            target="_blank"
          >
            zyadbassem9090@gmail.com
          </a>
        </div>
      </div>
    </Html>
  );
}

export default Contact;
