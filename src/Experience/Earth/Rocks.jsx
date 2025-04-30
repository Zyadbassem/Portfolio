import { useGLTF } from "@react-three/drei";

function Rocks() {
  const rocks = useGLTF("/rocks/desert_rocks.glb");

  return <primitive object={rocks.scene} />;
}

export default Rocks;
