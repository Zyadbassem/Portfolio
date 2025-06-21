import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

function AudioSetUp({ setAudioListener }) {
  const { camera } = useThree();

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);
    setAudioListener(listener);
    return () => {
      camera.remove(listener);
    };
  }, [camera, setAudioListener]);

  return null;
}

export default AudioSetUp;
