import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import useAudioListener from "../../Globals/useAudioListener";
import { useFrame } from "@react-three/fiber";

function AlienScene({ position = [0, 0, 0] }) {
  const alienShip = useGLTF("./Alien/alienShip.glb");
  const alien = useGLTF("./Alien/alien.glb");
  const alienRef = useRef();

  const { actions, clips } = useAnimations(alien.animations, alienRef);

  // audio set up
  const listener = useAudioListener();
  const audioRef = useRef();
  const groupRef = useRef();
  useEffect(() => {
    if (listener && !audioRef.current) {
      const loader = new THREE.AudioLoader();
      loader.load("./Alien/alienSong.mp3", (buffer) => {
        audioRef.current = new THREE.PositionalAudio(listener);
        audioRef.current.setBuffer(buffer);
        audioRef.current.setRefDistance(5);
        audioRef.current.setLoop(true);

        audioRef.current.setRefDistance(5); // Distance where volume is at reference level
        audioRef.current.setMaxDistance(10); // Maximum distance where sound is audible
        audioRef.current.setRolloffFactor(2); // Natural rolloff
        groupRef.current.add(audioRef.current);
        audioRef.current.play();
      });
    }
  }, [listener]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const elapsedTime = clock.getElapsedTime();
    const group = groupRef.current;

    // Optimize animation calculations
    group.rotation.x = Math.sin(elapsedTime) * 0.1;
    group.rotation.z = Math.cos(elapsedTime) * 0.1;
  });

  useEffect(() => {
    if (clips.length > 0) {
      const clipName = clips[0].name;
      const action = actions?.[clipName];

      if (action) {
        action.reset().fadeIn(0.5).play();
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.clampWhenFinished = true;
      }
    }
  }, [actions, clips]);

  return (
    <group position={position} ref={groupRef}>
      <primitive object={alienShip.scene} scale={[4, 4, 4]} />
      <primitive object={alien.scene} position={[2, 0.1, 2]} ref={alienRef} />
    </group>
  );
}

export default AlienScene;
