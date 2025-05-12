import Galaxy from "./Galaxy";

function ThirdPhase({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Galaxy
        position={[0, -8, -20]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0.5, 0, 0]}
        inColor="#ff0000"
        outColor="#00ffff"
        spinning={0.8}
      />
      <Galaxy
        position={[5, -5, -10]}
        scale={[0.2, 0.2, 0.2]}
        rotation={[-0.5, 0, 0]}
        inColor="#38ff00"
        outColor="#ff9400"
        spinning={1.5}
      />
      <Galaxy
        position={[10, 0, -30]}
        scale={[1, 1, 1]}
        rotation={[0.3, 0, 0]}
        inColor="#0045ff"
        outColor="#f802ee"
      />
    </group>
  );
}

export default ThirdPhase;
