import { useTexture } from "@react-three/drei";
function Flame({ position = [0, -0.05, 0.1], visible = true }) {
  const alphaMap = useTexture("/alpha_map_for_flames.png");
  const flameTexture = useTexture("/map_for_flames.png");
  return (
    <mesh position={position} visible={visible}>
      <planeGeometry args={[0.1, 0.1, 1, 1]} />
      <meshBasicMaterial alphaMap={alphaMap} transparent map={flameTexture} />
    </mesh>
  );
}

export default Flame;
