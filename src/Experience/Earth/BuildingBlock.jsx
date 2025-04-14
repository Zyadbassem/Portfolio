import BoxBuilder from "./BoxBuilder";

function BuildingBlock({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <BoxBuilder />
      <BoxBuilder position={[0.05, 0, 0.05]} rotation={[0, Math.PI / 2, 0]} />
      <BoxBuilder position={[-0.05, 0, 0.05]} rotation={[0, -Math.PI / 2, 0]} />
      <BoxBuilder position={[0, 0, 0.1]} rotation={[0, 0, 0]} />
    </group>
  );
}

export default BuildingBlock;
