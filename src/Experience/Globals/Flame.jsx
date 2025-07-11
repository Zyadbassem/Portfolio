import { useMemo, useState, useEffect, useRef } from "react";
import * as THREE from "three";
import fragmentShader from "./shaders/flamefragment.glsl";
import vertexShader from "./shaders/flamevertex.glsl";
import { useFrame } from "@react-three/fiber";
import useAudioListener from "./useAudioListener";

function Flame({ position = [0, -0.05, 0.1], visible = true }) {
  const [speed, setSpeed] = useState(0.0);
  const [arrowClicked, setArrowClicked] = useState(false);
  const listener = useAudioListener();
  const audiRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.key === "ArrowUp" ||
      (e.code === "KeyW" && !arrowClicked) ||
      e.detail.action === "ArrowUp"
        ? setArrowClicked(true)
        : null;
    };

    const handleKeyUp = (e) => {
      e.key === "ArrowUp" || e.code === "KeyW" || e.detail.action === "ArrowUp"
        ? setArrowClicked(false)
        : null;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("controllerDown", handleKeyDown);
    window.addEventListener("controllerUp", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("controllerDown", handleKeyDown);
      window.removeEventListener("controllerUp", handleKeyUp);
    };
  }, [speed]);

  useEffect(() => {
    if (!listener) return;

    const audio = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();
    loader.load("./spacerocket/rocketmovingnoise.mp3", (buffer) => {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.setVolume(0.3);
      audiRef.current = audio;
    });

    if (arrowClicked) audio.play();
    else audio.stop();
  }, [listener]);

  useEffect(() => {
    if (!audiRef.current) return;
    if (arrowClicked && !audiRef.current.isPlaying) audiRef.current.play();
    else if (!arrowClicked && audiRef.current.isPlaying) audiRef.current.stop();
  }, [arrowClicked]);

  const count = 800;
  const width = 1;
  const height = 5;
  const depth = 1;
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speedArray = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * depth;

      speedArray[i] = Math.random();
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("speed", new THREE.BufferAttribute(speedArray, 1));
    return geometry;
  }, [count, width, height, depth]);
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        width: {
          value: width,
        },
        height: {
          value: height,
        },
        u_time: {
          value: 0.0,
        },
        u_speed: {
          value: speed,
        },
      },
      transparent: true,
    });
  }, [vertexShader, fragmentShader]);

  useFrame(({ clock }) => {
    material.uniforms.u_time.value = clock.elapsedTime;
    material.needsUpdate = true;

    const handleSpeed = () => {
      if (arrowClicked && speed < 10.0) {
        setSpeed((s) => s + 0.1);
      } else if (!arrowClicked && speed > 0) {
        setSpeed((s) => s - 0.4);
      }
      material.uniforms.u_speed.value = speed;
    };

    handleSpeed();
  });
  return (
    <>
      <points
        material={material}
        geometry={geometry}
        position={position}
        scale={0.04}
        rotation={[0, 0, Math.PI]}
      />
    </>
  );
}

export default Flame;
