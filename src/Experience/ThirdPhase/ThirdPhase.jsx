import Galaxy from "./Galaxy";
import SpaceStation from "./spacestation/SpaceStation";

function ThirdPhase({ position = [0, 0, 0], mobile }) {
  return (
    <group position={position}>
      <Galaxy
        position={mobile ? [-8, -10, -50] : [-10, 0, -40]}
        scale={mobile ? [1, 1, 1] : [1.5, 1.5, 1.5]}
        rotation={
          mobile
            ? [Math.PI * 0.25, -Math.PI * 0.25, 0]
            : [Math.PI * 0.15, -Math.PI * 0.15, 0]
        }
        inColor="#0045ff"
        outColor="#f802ee"
        spinning={1.5}
        radiusp={10}
        countp={30000}
      />

      <SpaceStation position={mobile ? [0, 3, -50] : [10, 3, -40]} />
    </group>
  );
}

export default ThirdPhase;
