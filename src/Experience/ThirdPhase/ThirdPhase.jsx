import Certificates from "./Certificates";
import Galaxy from "./Galaxy";

function ThirdPhase({ position = [0, 0, 0], mobile }) {
  return (
    <group position={position}>
      <Galaxy
        position={mobile ? [-8, -10, -50] : [-10, 0, -40]}
        scale={mobile ? [0.8, 0.8, 0.8] : [1, 1, 1]}
        rotation={
          mobile
            ? [Math.PI * 0.25, -Math.PI * 0.15, 0]
            : [Math.PI * 0.15, -Math.PI * 0.15, 0]
        }
        inColor="#0045ff"
        outColor="#f802ee"
        spinning={1.5}
        radiusp={10}
        countp={10000}
      />

      <Certificates
        position={mobile ? [0, 0, -30] : [10, 0, -30]}
        mobile={mobile}
      />
    </group>
  );
}

export default ThirdPhase;
