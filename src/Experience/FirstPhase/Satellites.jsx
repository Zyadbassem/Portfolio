import { useEffect } from "react";
import { Instances, useGLTF, Instance } from "@react-three/drei";

function Satellites() {
  const gltf = useGLTF("/satellites.glb");
  useEffect(() => {
    console.log("GLTF nodes:", gltf.nodes);
    console.log("GLTF scene:", gltf.scene);
  });
  return <></>;
}

export default Satellites;
