import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

function Trees() {
  const gltf1 = useGLTF("/firstTree.glb");
  const gltf2 = useGLTF("/stones.glb");
  const gltf3 = useGLTF("/secondtree.glb");
  const firstTree = useMemo(() => {
    return [clone(gltf1.scene), clone(gltf1.scene), clone(gltf1.scene)];
  }, [gltf1]);
  const stones = useMemo(() => {
    return [clone(gltf2.scene), clone(gltf2.scene), clone(gltf2.scene)];
  });
  const secondTree = useMemo(() => {
    return [clone(gltf3.scene), clone(gltf3.scene), clone(gltf3.scene)];
  }, [gltf3]);
  return (
    <>
      <primitive object={firstTree[0]} position={[3, 0, -2]} scale={0.1} />
      <primitive object={firstTree[1]} position={[-5, 0, -1]} scale={0.1} />
      <primitive object={firstTree[2]} position={[-2, 0, -3]} scale={0.1} />
      <primitive object={secondTree[0]} position={[2, 0, 3]} scale={0.003} />
      <primitive object={secondTree[1]} position={[1, 0, -3]} scale={0.003} />
      <primitive object={secondTree[2]} position={[-2, 0, 1]} scale={0.003} />
    </>
  );
}

useGLTF.preload("/firstTree.glb");

export default Trees;
