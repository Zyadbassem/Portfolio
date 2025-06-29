import { DoubleSide } from "three";

function Block({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation} scale={[4, 3.5, 1]}>
      <planeGeometry />
      <meshStandardMaterial side={DoubleSide} />
    </mesh>
  );
}

export default Block;
