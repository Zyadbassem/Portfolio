import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stats } from "@react-three/drei";
import Earth from "./Earth/Earth";
import Stars from "./Globals/Stars";
import SpaceRocket from "./Globals/SpaceRocket";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import MagicWalls from "./Globals/MagicWalls";

function Experience() {
  return (
    <>
      <Leva />
      <Canvas
        style={{
          background: "black",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
        camera={{
          position: [0, 1, 7],
          fov: 35,
          rotation: [0, 0, 0],
        }}
      >
        <Stats />
        <Physics gravity={[0, -1, 0]} paused={false} debug>
          <MagicWalls />
          <Earth />
          <OrbitControls enabled={false} />
          <Stars />
          <ambientLight intensity={4} />
          {/* <directionalLight intensity={10} position={[-3, 4, 0]} /> */}
          <SpaceRocket />
          <axesHelper args={[5]} />
        </Physics>
      </Canvas>
    </>
  );
}
export default Experience;
