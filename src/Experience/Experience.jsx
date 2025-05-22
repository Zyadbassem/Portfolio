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
import Background from "./Background/Background";
import ThirdPhase from "./ThirdPhase/ThirdPhase";
import FourthPhase from "./FourthPhase/FourthPhase";
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
          position: [0, 0, 7],
          fov: 35,
          rotation: [0, 0, 0],
        }}
      >
        <Stats />
        <Physics gravity={[0, 0, 0]} paused={false} debug={false}>
          {/* <MagicWalls /> */}
          <Background />
          <Earth />
          {/* <Clouds position={[0, 10, 0]} /> */}
          <FirstPhase position={[0, 30, 0]} />
          <SecondPhase position={[0, 70, 0]} />
          <ThirdPhase position={[0, 85, 0]} />
          <FourthPhase position={[0, 110, 0]} />
          <OrbitControls enabled={false} />
          <Stars />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={3} position={[-10, 20, 10]} />
          <SpaceRocket cameraFollower={true} />
        </Physics>
      </Canvas>
    </>
  );
}
export default Experience;
