import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stats } from "@react-three/drei";
import Earth from "./Earth/Earth";
import Stars from "./Globals/Stars";
import SpaceRocket from "./Globals/SpaceRocket";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import MagicWalls from "./Globals/MagicWalls";
import FirstPhase from "./FirstPhase/FirstPhase";
import * as THREE from "three";
import SecondPhase from "./SecondPhase/SecondPhase";
import Clouds from "./Globals/Clouds";
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
        <Physics gravity={[0, 0, 0]} paused={false} debug={true}>
          <MagicWalls />
          <Earth />
          <Clouds position={[0, 10, 0]} />
          <FirstPhase position={[0, 30, 0]} />
          <SecondPhase position={[0, 70, 0]} />
          <OrbitControls enabled={true} />
          <Stars />
          <ambientLight intensity={2} />
          <directionalLight intensity={4} position={[-3, 20, 20]} />
          <SpaceRocket />
        </Physics>
      </Canvas>
    </>
  );
}
export default Experience;
