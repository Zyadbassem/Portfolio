import TextBuildingBlock from "./TextBuildingBlock";
import * as THREE from "three";

function SkillsText() {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const capSMaterial = new THREE.MeshBasicMaterial({ color: "#FF0000" });
  const kMaterial = new THREE.MeshBasicMaterial({ color: "#009DFF" });
  const iMaterial = new THREE.MeshBasicMaterial({ color: "#C8FF62" });
  const lMaterial = new THREE.MeshBasicMaterial({ color: "#FF00F6" });
  const secLMaterial = new THREE.MeshBasicMaterial({ color: "#5500FF" });
  const sMaterial = new THREE.MeshBasicMaterial({ color: "#FFC300" });
  return (
    <group position={[-2, 0, 0.2]}>
      <group position={[0.3, 0, 0]}>
        <TextBuildingBlock
          position={[-1.5, 0, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-1.3, 0, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-1.1, 0, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-0.9, 0.2, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-1.1, 0.4, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-1.3, 0.4, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-1.5, 0.6, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-1.3, 0.8, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-1.1, 0.8, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
        <TextBuildingBlock
          position={[-0.9, 0.8, 0]}
          geometry={geometry}
          material={capSMaterial}
        />
      </group>
      <group position={[0, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={kMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.6, 0]}
          geometry={geometry}
          material={kMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={kMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={kMaterial}
        />
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={kMaterial}
        />
        <TextBuildingBlock
          position={[0.2, 0.4, 0]}
          geometry={geometry}
          material={kMaterial}
        />
        <TextBuildingBlock
          position={[0.4, 0.6, 0]}
          geometry={geometry}
          material={kMaterial}
        />
        <TextBuildingBlock
          position={[0.4, 0.2, 0]}
          geometry={geometry}
          material={kMaterial}
        />
      </group>
      <group position={[1, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={iMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={iMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={iMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={iMaterial}
        />
      </group>
      <group position={[1.6, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={lMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.6, 0]}
          geometry={geometry}
          material={lMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={lMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={lMaterial}
        />
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={lMaterial}
        />
        <TextBuildingBlock
          position={[0.2, 0, 0]}
          geometry={geometry}
          material={lMaterial}
        />
      </group>
      <group position={[2.3, 0, 0]}>
        <TextBuildingBlock
          position={[0, 0.8, 0]}
          geometry={geometry}
          material={secLMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.6, 0]}
          geometry={geometry}
          material={secLMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.4, 0]}
          geometry={geometry}
          material={secLMaterial}
        />
        <TextBuildingBlock
          position={[0, 0.2, 0]}
          geometry={geometry}
          material={secLMaterial}
        />
        <TextBuildingBlock
          position={[0, 0, 0]}
          geometry={geometry}
          material={secLMaterial}
        />
        <TextBuildingBlock
          position={[0.2, 0, 0]}
          geometry={geometry}
          material={secLMaterial}
        />
      </group>
      <group position={[4.5, 0, 0]}>
        <TextBuildingBlock
          position={[-1.5, 0, 0]}
          geometry={geometry}
          material={sMaterial}
        />
        <TextBuildingBlock
          position={[-1.3, 0, 0]}
          geometry={geometry}
          material={sMaterial}
        />

        <TextBuildingBlock
          position={[-1.1, 0.2, 0]}
          geometry={geometry}
          material={sMaterial}
        />
        <TextBuildingBlock
          position={[-1.3, 0.4, 0]}
          geometry={geometry}
          material={sMaterial}
        />
        <TextBuildingBlock
          position={[-1.5, 0.4, 0]}
          geometry={geometry}
          material={sMaterial}
        />
        <TextBuildingBlock
          position={[-1.3, 0.6, 0]}
          geometry={geometry}
          material={sMaterial}
        />
        <TextBuildingBlock
          position={[-1.1, 0.6, 0]}
          geometry={geometry}
          material={sMaterial}
        />
      </group>
    </group>
  );
}

export default SkillsText;
