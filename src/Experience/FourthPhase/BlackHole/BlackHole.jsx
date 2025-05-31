import { useMemo } from "react";
import * as THREE from "three";
import blackholever from "./blackholever.glsl";
import blackholefrag from "./blackholefrag.glsl";
import Galaxy from "../../ThirdPhase/Galaxy";
function BlackHole({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  mobile = false,
}) {
  const radius = 1;
  const geometry = new THREE.CircleGeometry(radius, 54);

  const material = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      vertexShader: blackholever,
      fragmentShader: blackholefrag,
      uniforms: {
        u_radius: {
          value: radius,
        },
      },
    });
    return material;
  }, []);
  return (
    <group scale={scale} position={position}>
      <mesh geometry={geometry} material={material} position={[0, 0, 0]} />
      <Galaxy
        rotation={[0.5 * Math.PI, 0, 0]}
        countp={mobile ? 100000 : 500000}
        radiusp={1}
        branchesp={3}
        spinning={4.62}
        randomnessp={3}
        inColor="#ffffff"
        outColor="#ff3900"
        position={[0, 0, -0.1]}
        blackHole={true}
      />
    </group>
  );
}

export default BlackHole;
