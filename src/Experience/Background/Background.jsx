import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function Background() {
  const spaceTexture = useTexture("/Background/background.jpg", (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5);
    texture.needsUpdate = true;
  });
  const geometry = new THREE.SphereGeometry(500, 100, 100);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ map: spaceTexture });

  return <mesh geometry={geometry} material={material} />;
}

export default Background;
