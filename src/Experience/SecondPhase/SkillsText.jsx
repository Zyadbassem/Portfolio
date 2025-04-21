import TextBuildingBlock from "./TextBuildingBlock";
import * as THREE from "three";

function SkillsText() {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshBasicMaterial({ color: "#fff" });
  return (
    <group position={[-2, 0, 0.2]}>
      <group position={[0.3, 0, 0]}>
        <TextBuildingBlock
          position={[-1.5, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.3, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.1, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-0.9, 0.2, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.1, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.3, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.5, 0.6, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.3, 0.8, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.1, 0.8, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-0.9, 0.8, 0]}
          geometry={geometry}
          material={material}
        />
      </group>
      <group position={[0, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.6, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0.2, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0.4, 0.6, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0.4, 0.2, 0]}
          geometry={geometry}
          material={material}
        />
      </group>
      <group position={[1, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={material}
        />
      </group>
      <group position={[1.6, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.6, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0.2, 0, 0]}
          geometry={geometry}
          material={material}
        />
      </group>
      <group position={[2.3, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.6, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[0.2, 0, 0]}
          geometry={geometry}
          material={material}
        />
      </group>
      <group position={[4.5, 0, 0]}>
        <TextBuildingBlock
          position={[-1.5, 0, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.3, 0, 0]}
          geometry={geometry}
          material={material}
        />

        <TextBuildingBlock
          position={[-1.1, 0.2, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.3, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.5, 0.4, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.3, 0.6, 0]}
          geometry={geometry}
          material={material}
        />
        <TextBuildingBlock
          position={[-1.1, 0.6, 0]}
          geometry={geometry}
          material={material}
        />
      </group>
    </group>
  );
}

export default SkillsText;
