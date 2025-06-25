import { useEffect } from "react";
import * as THREE from "three";
import useAudioListener from "../Globals/useAudioListener";

function BackgroundAudio() {
  const listener = useAudioListener();

  useEffect(() => {
    if (!listener) {
      console.log("Audio listener not ready yet");
      return;
    }
    console.log("Audio listener ready:", listener);
    const audio = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();
    loader.load("./Background/spacenoise.mp3", (buffer) => {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.setVolume(0.1);
      audio.play();
    });
  }, [listener]);

  return null;
}

export default BackgroundAudio;
