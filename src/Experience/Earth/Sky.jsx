import { Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

function DynamiqueSky() {
  const sky = useRef();
  const {
    x,
    y,
    z,
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    inclination,
    azimuth,
  } = useControls({
    x: { value: 100, min: -1000, max: 1000 },
    y: { value: 100, min: -1000, max: 1000 },
    z: { value: -600, min: -1000, max: 1000 },
    turbidity: { value: 10, min: -100, max: 100 },
    rayleigh: { value: 7, min: -100, max: 100 },
    mieCoefficient: { value: 0.005, min: -1, max: 1 },
    mieDirectionalG: { value: 0.005, min: -1, max: 1 },
    inclination: { value: 0.005, min: -1, max: 1 },
    azimuth: { value: 0.005, min: -1, max: 1 },
  });

  useFrame(({ camera }) => {});
  return (
    <Sky
      ref={sky}
      sunPosition={[x, y, z]}
      turbidity={turbidity}
      rayleigh={rayleigh}
      mieCoefficient={mieCoefficient}
      mieDirectionalG={mieDirectionalG}
      inclination={inclination}
      azimuth={azimuth}
    />
  );
}

export default DynamiqueSky;
