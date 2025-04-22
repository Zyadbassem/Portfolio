import { Gltf } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Flame from "./Flame";
function SpaceRocket() {
  /** Create two refs one for the rocket and another for the current pressed keys  */
  const spaceRocketRef = useRef();
  const keysPressed = useRef({
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowDown: false,
  });
  const [thrusting, setThrusting] = useState(false);

  /** Constants used for the rocket movement
   * - MAX_VELOCITY: Maximum velocity of the rocket
   * - THRUST_FORCE: Force applied when the rocket is thrusting
   * - STEERING_FORCE: Force applied when the rocket is steering
   * - ROTATION_AMOUNT: Amount of rotation applied when steering
   * - TARGET_VEL: Target velocity of the rocket
   */
  const MAX_VELOCITY = 1;
  const THRUST_FORCE = 0.008;
  const STEERING_FORCE = 0.03;
  const ROTATION_AMOUNT = 0.1;
  const TARGET_VEL = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"].includes(e.key)) {
        keysPressed.current[e.key] = true;
      }
      if (e.key === "ArrowUp") setThrusting(true);
    };

    const handleKeyUp = (e) => {
      if (["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"].includes(e.key)) {
        keysPressed.current[e.key] = false;
        if (
          (e.key === "ArrowLeft" || e.key === "ArrowRight") &&
          spaceRocketRef.current
        ) {
          spaceRocketRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 });
        }
      }
      if (e.key === "ArrowUp") setThrusting(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(({ camera }, delta) => {
    if (!spaceRocketRef.current) return;

    const currentVel = spaceRocketRef.current.linvel();
    const position = spaceRocketRef.current.translation();
    if (keysPressed.current.ArrowUp) {
      TARGET_VEL.current.y = Math.min(TARGET_VEL.current.y + 0.1, MAX_VELOCITY);
    } else if (keysPressed.current.ArrowDown) {
      TARGET_VEL.current.y = Math.max(
        TARGET_VEL.current.y - 0.1,
        -MAX_VELOCITY,
      );
    } else {
      TARGET_VEL.current.y = 0;
    }

    if (keysPressed.current.ArrowLeft) {
      TARGET_VEL.current.x = Math.max(
        TARGET_VEL.current.x - 0.03,
        -MAX_VELOCITY,
      );
      // Visual tilt
      spaceRocketRef.current.setRotation({
        x: 0,
        y: 0,
        z: ROTATION_AMOUNT,
        w: 1,
      });
    } else if (keysPressed.current.ArrowRight) {
      TARGET_VEL.current.x = Math.min(
        TARGET_VEL.current.x + 0.03,
        MAX_VELOCITY,
      );
      // Visual tilt
      spaceRocketRef.current.setRotation({
        x: 0,
        y: 0,
        z: -ROTATION_AMOUNT,
        w: 1,
      });
    } else {
      // Gradually return to center when no lateral keys are pressed
      TARGET_VEL.current.x *= 0.95;
    }

    // Smooth interpolation between current and target velocity
    const lerpFactor = Math.min(1.0, delta * 10); // Adjust for desired smoothness

    const smoothedVel = {
      x: THREE.MathUtils.lerp(currentVel.x, TARGET_VEL.current.x, lerpFactor),
      y: THREE.MathUtils.lerp(currentVel.y, TARGET_VEL.current.y, lerpFactor),
      z: 0,
    };

    spaceRocketRef.current.setLinvel(smoothedVel, true);
    if (keysPressed.current.ArrowUp) {
      spaceRocketRef.current.applyImpulse(
        {
          x: 0,
          y: THRUST_FORCE * delta * 60,
          z: 0,
        },
        true,
      );
      if (keysPressed.current.ArrowLeft) {
        spaceRocketRef.current.applyImpulse(
          {
            x: -STEERING_FORCE * delta * 60,
            y: 0,
            z: 0,
          },
          true,
        );
      } else if (keysPressed.current.ArrowRight) {
        spaceRocketRef.current.applyImpulse(
          {
            x: STEERING_FORCE * delta * 60,
            y: 0,
            z: 0,
          },
          true,
        );
      }
    }

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      position.y + 1.5,
      0.1,
    );
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      position.x,
      0.1,
    );
  });

  return (
    <RigidBody
      ref={spaceRocketRef}
      position={[0, 0.1, -0.05]}
      mass={30}
      colliders={false}
      lockRotations
      linearDamping={0.8}
      angularDamping={2}
      lockTranslations={[false, false, true]}
    >
      {/* Colliders */}
      <CylinderCollider args={[0.3, 0.1]} position={[0, 0.3, 0.08]} />
      <CylinderCollider args={[0.1, 0.05]} position={[0.121, 0.1, 0.2]} />
      <CylinderCollider args={[0.1, 0.05]} position={[-0.121, 0.1, 0.2]} />
      <CylinderCollider args={[0.1, 0.05]} position={[0.1, 0.1, -0.05]} />
      <CylinderCollider args={[0.1, 0.05]} position={[-0.1, 0.1, -0.05]} />

      {/* 3D Model */}
      <Gltf
        src="/spacerocket.glb"
        scale={0.3}
        position={[0, 0.25, 0.08]}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* Flames for the rocket */}

      <>
        <Flame position={[0, -0.05, 0.1]} visible={thrusting} />
        <Flame position={[0.121, -0.05, 0.2]} visible={thrusting} />
        <Flame position={[-0.121, -0.05, 0.2]} visible={thrusting} />
      </>
    </RigidBody>
  );
}

export default SpaceRocket;
