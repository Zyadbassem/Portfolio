import { CuboidCollider, RigidBody } from "@react-three/rapier";
import BarbedWire from "./BarbedWire";
import FencePart from "./FencePart";
import WarningSign from "./WarningSign";
function Fence({ position = [0, 0, 0] }) {
  return (
    <>
      <group position={position} scale={[4, 4, 4]}>
        <FencePart position={[0, 0, 0]} rotation={[0, 0, 0.25 * Math.PI]} />
        <FencePart position={[-0.17, 0, 0]} rotation={[0, 0, 0.25 * Math.PI]} />
        <FencePart position={[0.17, 0, 0]} rotation={[0, 0, 0.25 * Math.PI]} />
        <FencePart position={[-0.34, 0, 0]} rotation={[0, 0, 0.25 * Math.PI]} />
        <FencePart position={[0.34, 0, 0]} rotation={[0, 0, 0.25 * Math.PI]} />
        <FencePart position={[-0.51, 0, 0]} rotation={[0, 0, 0.25 * Math.PI]} />
        <FencePart position={[0.51, 0, 0]} rotation={[0, 0, 0.25 * Math.PI]} />

        {/** Back */}
        <FencePart position={[0, 0, -0.86]} rotation={[0, 0, 0.25 * Math.PI]} />
        <FencePart
          position={[-0.17, 0, -0.86]}
          rotation={[0, 0, 0.25 * Math.PI]}
        />
        <FencePart
          position={[0.17, 0, -0.86]}
          rotation={[0, 0, 0.25 * Math.PI]}
        />
        <FencePart
          position={[-0.34, 0, -0.86]}
          rotation={[0, 0, 0.25 * Math.PI]}
        />
        <FencePart
          position={[0.34, 0, -0.86]}
          rotation={[0, 0, 0.25 * Math.PI]}
        />
        <FencePart
          position={[-0.51, 0, -0.86]}
          rotation={[0, 0, 0.25 * Math.PI]}
        />
        <FencePart
          position={[0.51, 0, -0.86]}
          rotation={[0, 0, 0.25 * Math.PI]}
        />

        {/** Left */}
        <FencePart
          position={[-0.6, 0, -0.09]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[-0.6, 0, -0.26]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[-0.6, 0, -0.43]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[-0.6, 0, -0.6]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[-0.6, 0, -0.77]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />

        {/** Right */}
        <FencePart
          position={[0.6, 0, -0.09]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[0.6, 0, -0.26]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[0.6, 0, -0.43]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[0.6, 0, -0.6]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <FencePart
          position={[0.6, 0, -0.77]}
          rotation={[0, -0.5 * Math.PI, 0.25 * Math.PI]}
        />
        <BarbedWire
          scale={[0.01, 0.01, 0.01]}
          width={120}
          position={[0, 0.07, 0]}
        />
        <BarbedWire
          scale={[0.01, 0.01, 0.01]}
          width={120}
          position={[0, 0.07, -0.86]}
        />
        <BarbedWire
          scale={[0.01, 0.01, 0.01]}
          width={85}
          rotation={[0, 0.5 * Math.PI, 0]}
          position={[0.6, 0.07, -0.43]}
        />
        <BarbedWire
          scale={[0.01, 0.01, 0.01]}
          width={85}
          rotation={[0, 0.5 * Math.PI, 0]}
          position={[-0.6, 0.07, -0.43]}
        />
        {/* <WarningSign position={[0, 0.05, 0.1]} /> */}
        <WarningSign position={[0.2, 0.05, 0.01]} />
        <WarningSign position={[-0.2, 0.05, 0.01]} />
        <WarningSign position={[0.4, 0.05, 0.01]} />
        <WarningSign position={[-0.4, 0.05, 0.01]} />
      </group>
      <RigidBody type="fixed" position={[2.4, 0.1, 0]}>
        <CuboidCollider args={[0.1, 0.4, 1.5]} />
      </RigidBody>
      <RigidBody type="fixed" position={[-2.4, 0.1, 0]}>
        <CuboidCollider args={[0.1, 0.4, 1.5]} />
      </RigidBody>
    </>
  );
}

export default Fence;
