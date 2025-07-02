import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import useAudioListener from "../../Globals/useAudioListener";

function SpaceShip({
  position = [-5, 0, 0],
  pointA = { x: -5, y: 0, z: 0 },
  pointB = { x: -3, y: 4, z: 0 },
  pointC = { x: -7, y: 2, z: 0 },
  rotation = [0, 0, 0],
  createNewBullet = () => {},
  speed = 1,
  skillsAndColors = [
    {
      skill: "React",
      color: "#58caf1",
    },
    {
      skill: "Express",
      color: "#f2d01b",
    },
    {
      skill: "Three js",
      color: "#fff",
    },
  ],
  modelNum = 1,
}) {
  // Get the spaceship model and give it a ref so we could control animation
  const { scene } = useGLTF(`./ship/spaceship${modelNum}.glb`);
  const spaceShipModel = useMemo(() => clone(scene), [scene]);
  const spaceShipRef = useRef();

  useEffect(() => {
    // timeline for ordering animation
    const tl = gsap.timeline({
      repeat: -1,
    });

    // stop 0.5 second at the beginning
    tl.to({}, { duration: 0.5 });

    // move from a to b WITH sound on start
    tl.to(spaceShipRef.current.position, {
      duration: 1 * speed,
      x: pointB.x,
      y: pointB.y,
      z: pointB.z,
      ease: "back.inOut",
      // onStart: playMovementSound, // Sound plays when movement starts
    })
      // create a bullet at b
      .call(() => {
        createNewBullet(
          { x: pointB.x, y: pointB.y + 0.5, z: pointB.z },
          {
            x: pointB.x > 0 ? pointB.x - 50 : pointB.x + 50,
            y: pointB.y + 0.8,
            z: pointB.z,
          },
          pointB.x > 0,
          skillsAndColors[0].color,
          skillsAndColors[0].skill
        );
      })

      .to({}, { duration: 0.5 })

      // move to c
      .to(spaceShipRef.current.position, {
        duration: 1 * speed,
        x: pointC.x,
        y: pointC.y,
        z: pointC.z,
        ease: "back.inOut",
      })

      // create a bullet at c
      .call(() => {
        createNewBullet(
          { x: pointC.x, y: pointC.y + 0.8, z: pointC.z },
          {
            x: pointC.x > 0 ? pointC.x - 50 : pointC.x + 50,
            y: pointC.y + 0.8,
            z: pointC.z,
          },
          pointC.x > 0,
          skillsAndColors[1].color,
          skillsAndColors[1].skill
        );
      })

      // wait 0.5 at c
      .to({}, { duration: 0.5 })

      // return to a
      .to(spaceShipRef.current.position, {
        duration: 1 * speed,
        x: pointA.x,
        y: pointA.y,
        z: pointA.z,
        ease: "back.inOut",
      })

      // create a bullet at a
      .call(() => {
        createNewBullet(
          { x: pointA.x, y: pointA.y + 0.8, z: pointA.z },
          {
            x: pointA.x > 0 ? pointA.x - 50 : pointA.x + 50,
            y: pointA.y + 0.8,
            z: pointA.z,
          },
          pointA.x > 0,
          skillsAndColors[2].color,
          skillsAndColors[2].skill
        );
      });

    return () => tl.kill();
  }, []);

  return (
    <>
      <primitive
        object={spaceShipModel}
        ref={spaceShipRef}
        scale={[2, 2, 2]}
        position={position}
        rotation={rotation}
      />
    </>
  );
}

export default SpaceShip;
