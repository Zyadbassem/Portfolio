import { Gltf } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Flame from "./Flame";
function SpaceRocket({ cameraFollower = true }) {
  /** Create two refs one for the rocket and another for the current pressed keys  */
  const spaceRocketRef = useRef();
  const keysPressed = useRef({
    ArrowUp: false,
    w: false,
    ArrowLeft: false,
    d: false,
    ArrowRight: false,
    a: false,
    ArrowDown: false,
    s: false,
  });
  const [thrusting, setThrusting] = useState(false);

  /** Constants used for the rocket movement
   * - MAX_VELOCITY: Maximum velocity of the rocket
   * - THRUST_FORCE: Force applied when the rocket is thrusting
   * - STEERING_FORCE: Force applied when the rocket is steering
   * - ROTATION_AMOUNT: Amount of rotation applied when steering
   * - TARGET_VEL: Target velocity of the rocket
   */
  const MAX_VELOCITY = 3;
  const THRUST_FORCE = 0.008;
  const STEERING_FORCE = 0.03;
  const ROTATION_AMOUNT = 0.1;
  const TARGET_VEL = useRef({ x: 0, y: 0 });
  const BLACK_HOLE_X = 15;
  const BLACK_HOLE_Y = 114.5;
  const MAX_ATTRACTION_DISTANCE = 25;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        [
          "ArrowUp",
          "ArrowLeft",
          "ArrowRight",
          "ArrowDown",
          "w",
          "a",
          "d",
          "s",
        ].includes(e.key)
      ) {
        keysPressed.current[e.key] = true;
      }
      console.log(e.key);
      if (e.key === "ArrowUp" || e.key === "w") {
        setThrusting(true);
        console.log("trusting");
      }
    };

    const handleKeyUp = (e) => {
      if (
        [
          "ArrowUp",
          "ArrowLeft",
          "ArrowRight",
          "ArrowDown",
          "w",
          "a",
          "d",
          "s",
        ].includes(e.key)
      ) {
        keysPressed.current[e.key] = false;
        if (
          (e.key === "ArrowLeft" ||
            e.key === "ArrowRight" ||
            e.key === "a" ||
            e.key === "d") &&
          spaceRocketRef.current
        ) {
          spaceRocketRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 });
        }
      }
      if (e.key === "ArrowUp" || e.key === "w") {
        setThrusting(false);
        console.log("Thrusting set to false");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const calculateBlackHoleForce = (rocketX, rocketY) => {
    // Get how far is the rocket from the the black hole
    const farX = BLACK_HOLE_X - rocketX;
    const farY = BLACK_HOLE_Y - rocketY;
    const dis = Math.sqrt(farX ** 2 + farY ** 2);

    // If the rocket is close > 1.5 or is so far
    if (dis < 1 || dis > MAX_ATTRACTION_DISTANCE) {
      return { x: 0, y: 0 };
    }

    const disX = farX / MAX_ATTRACTION_DISTANCE;
    const disY = farY / MAX_ATTRACTION_DISTANCE;

    const converX = disX > 0 ? 1 - disX : -1 - disX;
    const converY = disY > 0 ? 1 - disY : -1 - disY;

    const outX = (converX / MAX_ATTRACTION_DISTANCE) * 3.5;
    const outY = (converY / MAX_ATTRACTION_DISTANCE) * 3.5;

    if (Math.abs(farX) < 1 && Math.abs(farY > 1)) return { x: 0, y: outY };
    else if (Math.abs(farX) > 1 && Math.abs(farY) < 1) return { x: outX, y: 0 };
    else if (
      Math.abs(farX) > MAX_ATTRACTION_DISTANCE ||
      Math.abs(farY) > MAX_ATTRACTION_DISTANCE
    )
      return { x: 0, y: 0 };
    else return { x: outX, y: outY };
  };

  useFrame(({ camera }, delta) => {
    if (!spaceRocketRef.current) return;
    const currentVel = spaceRocketRef.current.linvel();
    const position = spaceRocketRef.current.translation();

    if (keysPressed.current.ArrowUp || keysPressed.current.w) {
      TARGET_VEL.current.y = Math.min(TARGET_VEL.current.y + 0.1, MAX_VELOCITY);
    } else if (keysPressed.current.ArrowDown || keysPressed.current.s) {
      TARGET_VEL.current.y = Math.max(
        TARGET_VEL.current.y - 0.1,
        -MAX_VELOCITY
      );
    } else {
      TARGET_VEL.current.y > 0
        ? (TARGET_VEL.current.y -= 0.01)
        : (TARGET_VEL.current.y += 0.01);
    }

    /**
     *  Black hole effect
     **/

    const { x, y } = calculateBlackHoleForce(position.x, position.y);

    if (Math.abs(x) > 0 || Math.abs(y) > 0) {
      let posX =
        x > 0
          ? Math.min(TARGET_VEL.current.x + x, MAX_VELOCITY * 3)
          : Math.max(TARGET_VEL.current.x + x, -MAX_VELOCITY * 3);
      let posY =
        y > 0
          ? Math.min(TARGET_VEL.current.y + y, MAX_VELOCITY * 2)
          : Math.max(TARGET_VEL.current.y + y, -MAX_VELOCITY * 2);

      TARGET_VEL.current.x = posX;
      TARGET_VEL.current.y = posY;
    }

    if (keysPressed.current.ArrowLeft || keysPressed.current.a) {
      TARGET_VEL.current.x = Math.max(
        TARGET_VEL.current.x - 0.03,
        -MAX_VELOCITY
      );
      // Visual tilt
      spaceRocketRef.current.setRotation({
        x: 0,
        y: 0,
        z: ROTATION_AMOUNT,
        w: 1,
      });
    } else if (keysPressed.current.ArrowRight || keysPressed.current.d) {
      TARGET_VEL.current.x = Math.min(
        TARGET_VEL.current.x + 0.03,
        MAX_VELOCITY
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
    const lerpFactor = Math.min(0.7, delta * 10);
    const smoothedVel = {
      x: THREE.MathUtils.lerp(currentVel.x, TARGET_VEL.current.x, lerpFactor),
      y: THREE.MathUtils.lerp(currentVel.y, TARGET_VEL.current.y, lerpFactor),
      z: 0,
    };

    spaceRocketRef.current.setLinvel(smoothedVel, true);
    if (keysPressed.current.ArrowUp || keysPressed.current.w) {
      spaceRocketRef.current.applyImpulse(
        {
          x: 0,
          y: THRUST_FORCE * delta * 60,
          z: 0,
        },
        true
      );
      if (keysPressed.current.ArrowLeft || keysPressed.current.a) {
        spaceRocketRef.current.applyImpulse(
          {
            x: -STEERING_FORCE * delta * 60,
            y: 0,
            z: 0,
          },
          true
        );
      } else if (keysPressed.current.ArrowRight || keysPressed.current.d) {
        spaceRocketRef.current.applyImpulse(
          {
            x: STEERING_FORCE * delta * 60,
            y: 0,
            z: 0,
          },
          true
        );
      }
    }

    if (cameraFollower) {
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        position.y + 1,
        0.1
      );
      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        position.x,
        0.1
      );
    }
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
        <Flame position={[0, -0.1, 0.1]} visible={thrusting} />
        <Flame position={[0.121, -0.1, 0.2]} visible={thrusting} />
        <Flame position={[-0.121, -0.1, 0.2]} visible={thrusting} />
      </>
    </RigidBody>
  );
}

export default SpaceRocket;
