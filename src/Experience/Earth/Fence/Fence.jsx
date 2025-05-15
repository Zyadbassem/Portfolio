import BarbedWire from "./BarbedWire";
import FencePart from "./FencePart";
function Fence({ position = [0, 0, 0] }) {
  return (
    <group position={position} scale={[3, 3, 3]}>
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
    </group>
  );
}

export default Fence;
