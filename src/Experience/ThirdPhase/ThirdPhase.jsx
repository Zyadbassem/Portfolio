import Galaxy from "./Galaxy";
import SpaceStation from "./spacestation/SpaceStation";

function ThirdPhase({ position = [0, 0, 0], mobile }) {
  return (
    <group position={position}>
      <Galaxy
        position={mobile ? [-5, 0, -20] : [-5, 0, -10]}
        scale={mobile ? [1, 1, 1] : [1, 1, 1]}
        rotation={
          mobile
            ? [Math.PI * 0.25, -Math.PI * 0.25, 0]
            : [Math.PI * 0.2, -Math.PI * 0.15, 0]
        }
        inColor="#0045ff"
        outColor="#f802ee"
        spinning={1.5}
        radiusp={5}
        countp={30000}
      />

      <SpaceStation position={mobile ? [0, 3, -10] : [5, 3, -10]} />
    </group>
  );
}

export default ThirdPhase;
