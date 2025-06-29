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
import SecondPhase from "./SecondPhase/SecondPhase";
import Background from "./Background/Background";
import ThirdPhase from "./ThirdPhase/ThirdPhase";
import FourthPhase from "./FourthPhase/FourthPhase";
import * as THREE from "three";
import BackgroundAudio from "./Background/BackgroundAudio";
import {
  EffectComposer,
  Bloom,
  Noise,
  ToneMapping,
  Vignette,
  SSAO,
  Pixelation,
  Scanline,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
function Experience({ mobile = false }) {
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
          position: [0, 0, mobile ? 10 : 7],
          fov: 35,
          rotation: [0, 0, 0],
        }}
      >
        <Stats />
        <Physics gravity={[0, 0, 0]} paused={false} debug={false}>
          <MagicWalls mobile={mobile} />
          <Background />
          <Earth />
          {/* <Clouds position={[0, 10, 0]} /> */}
          <FirstPhase position={[0, 20, 0]} mobile={mobile} />
          <SecondPhase position={[0, 55, mobile ? -30 : -20]} mobile={mobile} />
          <ThirdPhase position={[0, 85, 0]} mobile={mobile} />
          <FourthPhase position={[0, 110, 0]} mobile={mobile} />
          <OrbitControls enabled={false} />
          {/* <Stars /> */}
          <ambientLight intensity={0.5} />
          <directionalLight intensity={3} position={[-10, 20, 10]} />
          <SpaceRocket cameraFollower={true} mobile={mobile} />
          <BackgroundAudio />
        </Physics>
        {!mobile && (
          <EffectComposer multisampling={0} disableNormalPass>
            {/* Subtle glow on stars, lasers, engines */}
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.5}
            />

            {/* Adds depth, mood — like space ambient darkness */}
            <Vignette eskil={false} offset={0.1} darkness={1.3} />
          </EffectComposer>
        )}
      </Canvas>
    </>
  );
}
export default Experience;
