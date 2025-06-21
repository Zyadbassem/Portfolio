import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Global listener instance
let globalListener = null;

export default function useAudioListener() {
  const { camera } = useThree();
  const [ready, setReady] = useState(false);
  const isAttachedRef = useRef(false);

  useEffect(() => {
    if (!globalListener) {
      globalListener = new THREE.AudioListener();
    }

    if (!isAttachedRef.current && camera) {
      camera.add(globalListener);
      isAttachedRef.current = true;
      setReady(true); // Only mark as ready after it's attached
    }

    return () => {
      if (isAttachedRef.current) {
        camera.remove(globalListener);
        isAttachedRef.current = false;
        setReady(false);
      }
    };
  }, [camera]);

  return ready ? globalListener : null;
}
