import { useState, useEffect } from "react";
import Meteorite from "./Meteorite";
import { useFrame } from "@react-three/fiber";

function Meteorites({ position = [0, 0, 0], count = 10 }) {
  // initialize a state to hold the meteorites and inistantiate the first wave with use effect
  const [meteorites, setMeteorites] = useState([]);
  useEffect(() => {
    const initialMeteorites = [];
    for (let i = 0; i < count; i++) {
      initialMeteorites.push(createNewMeteorite(i));
    }
    setMeteorites(initialMeteorites);
  }, [count]);

  // function to create a new meteorite
  const createNewMeteorite = (id) => {
    return {
      id: id,
      position: [
        Math.random() * 10 + 10,
        Math.random() * 5,
        Math.random() + 0.5 * -30,
      ],
      rotation: [0, 0, (Math.random() - 0.5) * 0.15 * Math.PI],
      initialImpulse: Math.random() * 10 + 5,
      key: `meteorite-${id}-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`,
    };
  };

  // useFrame to update the meteorites
  useFrame(() => {
    setMeteorites((currentMeteorites) => {
      let updated = false;
      const newMeteorites = currentMeteorites.map((meteorite) => {
        const currentY = meteorite.ref?.current?.translation()?.y;
        if (currentY !== undefined && currentY < 20) {
          updated = true;
          return createNewMeteorite(meteorite.id);
        }
        return meteorite;
      });
      return updated ? newMeteorites : currentMeteorites;
    });
  });

  return (
    <group position={position}>
      {meteorites.map((meteorite) => (
        <Meteorite
          key={meteorite.key}
          position={meteorite.position}
          rotation={meteorite.rotation}
          initialImpulse={meteorite.initialImpulse}
          onRef={(ref) => {
            meteorite.ref = ref;
          }}
        />
      ))}
    </group>
  );
}

export default Meteorites;
