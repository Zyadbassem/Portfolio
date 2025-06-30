import { Html } from "@react-three/drei";

function Contact({ position = [0, 0, 0] }) {
  return <Html transform position={position}></Html>;
}

export default Contact;
