import { useGLTF } from "@react-three/drei";

function Building({
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  const building = useGLTF("/NasaBuilding/nasabuilding.glb");
  return (
    <primitive
      object={building.scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

export default Building;
