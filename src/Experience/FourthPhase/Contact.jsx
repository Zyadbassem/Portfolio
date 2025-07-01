import { Html } from "@react-three/drei";

function Contact({ position = [0, 0, 0] }) {
  return (
    <Html transform position={position}>
      <div
        style={{
          color: "white",
          width: "200px",
          maxWidth: "90%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "300",
            margin: "5px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "10px" }}>Email: </div>
          <a
            href="mailto:zyadbassem9090@gmail.com"
            target="_blank"
            style={{ color: "#0b66c2", fontSize: "10px" }}
          >
            zyadbassem9090@gmail.com
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "300",
            margin: "5px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "10px" }}>LinkedIn: </div>
          <a
            href="https://linkedin.com/in/zeiad-salmoun-3774992a2"
            target="_blank"
            style={{ color: "#0b66c2", fontSize: "10px" }}
          >
            Zeiad Salmoun
          </a>
        </div>
      </div>
    </Html>
  );
}

export default Contact;
