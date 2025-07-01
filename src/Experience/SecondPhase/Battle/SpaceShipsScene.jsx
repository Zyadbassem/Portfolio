import { useState, useCallback } from "react";
import Bullet from "./Bullet";
import SpaceShip from "./SpaceShip.jsx";
function SpaceShipsScene({ mobile = false }) {
  // State for bullets and audiolistener
  const [bullets, setBullets] = useState([]);
  const [audioListener, setAudioListener] = useState(null);

  const removeBullet = useCallback((i) => {
    setBullets((prevBullets) => prevBullets.filter((_, index) => index !== i));
  }, []);

  // function to add new bullet (will be used later in spaceship component)
  const addBullet = useCallback((p1, p2, invert, color, skill) => {
    const bullet = {
      positionA: p1,
      positionB: p2,
      invert: invert,
      key: `bullet-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      color: color,
      skill: skill,
    };
    setBullets((prevBullets) => [...prevBullets, bullet]);
  }, []);
  return (
    <group>
      <SpaceShip
        speed={0.8}
        createNewBullet={addBullet}
        position={[mobile ? -4 : -7, 0, 0]}
        rotation={[0, 0.5 * Math.PI, 0]}
        pointA={{ x: mobile ? -4 : -7, y: 0, z: 0 }}
        pointB={{ x: mobile ? -3 : -5, y: 4, z: 0 }}
        pointC={{ x: mobile ? -6 : -9, y: 2, z: 0 }}
        audioListener={audioListener}
        modelNum={0}
      />
      <SpaceShip
        pointA={{ x: mobile ? 4 : 7, y: 1, z: 0 }}
        pointB={{ x: mobile ? 3 : 5, y: 5.5, z: 0 }}
        pointC={{ x: mobile ? 6 : 9, y: 3.5, z: 0 }}
        position={[mobile ? 4 : 7, 1, 0]}
        spaceShipNum={2}
        rotation={[0, 0, 0]}
        speed={1}
        createNewBullet={addBullet}
        modelNum={1}
        audioListener={audioListener}
        skillsAndColors={[
          {
            skill: "CS50",
            color: "#9f1d2e",
          },
          {
            skill: "BS in IT",
            color: "#0f3873",
          },
          {
            skill: "Three.js journey",
            color: "#705df2",
          },
        ]}
      />
      {bullets.map((v, i) => {
        return (
          <Bullet
            positionA={v.positionA}
            positionB={v.positionB}
            key={v.key}
            invert={v.invert}
            index={i}
            removeBullet={removeBullet}
            bulletColor={v.color}
            skillName={v.skill}
            audioListener={audioListener}
          />
        );
      })}
    </group>
  );
}

export default SpaceShipsScene;
