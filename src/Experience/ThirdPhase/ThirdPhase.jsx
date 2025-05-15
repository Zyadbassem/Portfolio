import Certificates from "./Certificates";
import Galaxy from "./Galaxy";

function ThirdPhase({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Galaxy
        position={[-10, 0, -40]}
        scale={[1, 1, 1]}
        rotation={[Math.PI * 0.15, -Math.PI * 0.15, 0]}
        inColor="#0045ff"
        outColor="#f802ee"
      />
      <Certificates position={[12, 0, -30]} />
    </group>
  );
}

export default ThirdPhase;
