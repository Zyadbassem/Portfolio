import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { useEffect, useMemo, useRef } from "react";
import {
  CuboidCollider,
  CylinderCollider,
  RigidBody,
} from "@react-three/rapier";
function Satellites({ mobile = false }) {
  const satellitesRef = useRef([]);
  const gltf = useGLTF("/satellites.glb");
  const count = 7;
  const satellites = useMemo(() => {
    const clonedSatellites = [];
    for (let i = 0; i < count; i++) {
      const width = mobile ? 5 : 15;
      const height = 10;
      const randomX = (Math.random() - 0.5) * width;
      const randomY = (Math.random() - 0.5) * height;
      const randomYRotation = Math.random() * Math.PI * 2;
      const randomZRotation = Math.random() * Math.PI * 2;
      clonedSatellites.push({
        clone: clone(gltf.scene),
        position: [randomX, randomY, 0],
        rotation: [0, randomYRotation, randomZRotation],
      });
    }
    return clonedSatellites;
  });

  useEffect(() => {
    satellitesRef.current.forEach((satelliteRef, _) => {
      if (satelliteRef) {
        satelliteRef.applyTorqueImpulse({ x: 0, y: 0.005, z: 0 }, true);
      }
    });
  }, [satellitesRef]);
  return (
    <>
      {satellites.map((satellite, index) => (
        <RigidBody
          key={index}
          colliders={false}
          position={satellite.position}
          rotation={satellite.rotation}
          canSleep={true}
          restitutionCombineRule="multiply"
          ref={(satelliteRef) => {
            satellitesRef.current[index] = satelliteRef;
          }}
          lockTranslations={[false, false, true]}
        >
          <primitive
            key={index}
            object={satellite.clone}
            scale={mobile ? 0.1 : 0.15}
          />
          <CylinderCollider
            args={[0.4, 0.225]}
            position={[0.15, 0, -0.2]}
            rotation={[Math.PI * 0.45, 0, Math.PI * 0.2]}
          />
          <CuboidCollider
            args={[0.45, 0.025, 0.25]}
            position={[0.78, -0.055, 0.06]}
            rotation={[Math.PI * -2.58, Math.PI * 0.04, Math.PI * 0.83]}
          />
          <CuboidCollider
            args={[0.45, 0.025, 0.25]}
            position={[-0.385, -0.115, -0.655]}
            rotation={[Math.PI * -2.58, Math.PI * 0.04, Math.PI * 0.83]}
          />
        </RigidBody>
      ))}
    </>
  );
}

export default Satellites;
