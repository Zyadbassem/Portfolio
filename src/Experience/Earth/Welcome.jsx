import * as THREE from "three";

function Welcome() {
  const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        vec3 pos = position;
        float curve = pow((uv.x - 0.5) * 2.0, 2.0);
        pos.y += curve * 0.2; // Push the sides forward to make a "curve" shape
        pos.z += curve * -0.1; // Pull center in Z axis to create hanging effect
        vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * modelViewPosition;
        gl_PointSize = 10.0;
    }
    `;
  const fragmentShader = `
    varying vec2 vUv;
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
    `;

  const materialForLongs = new THREE.MeshBasicMaterial({ color: "#583927" });
  const geometryForLongs = new THREE.CylinderGeometry(0.01, 0.01, 2);
  return (
    <group>
      <mesh
        material={materialForLongs}
        geometry={geometryForLongs}
        position={[1.5, 1, -1]}
      />
      <mesh
        material={materialForLongs}
        geometry={geometryForLongs}
        position={[-1.5, 1, -1]}
      />
      <mesh position={[0, 1.2, -1]}>
        <planeGeometry args={[2, 0.8, 108, 108]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default Welcome;
