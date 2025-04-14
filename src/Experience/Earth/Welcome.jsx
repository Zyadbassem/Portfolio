import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
function Welcome() {
  const textureMap = useTexture("/map-for-welcome.png");
  useEffect(() => {
    if (textureMap) {
      textureMap.needsUpdate = true;
      textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping;
    }
  }, [textureMap]);

  const vertexShader = `
  uniform float time;
  varying vec2 vUv;
  
  void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Wave effect parameters
      float frequency = 2.5; // Controls how many waves appear
      float amplitude = 0.08; // Controls the height of the waves
      float speed = 1.5; // Controls the speed of the animation
      
      // Map uv.x to cover both positive and negative values on x-axis
      // This transforms uv.x from [0,1] range to [-0.5,0.5] range
      float xPos = uv.x - 0.5;
      
      // Create wave effect based on X position and time
      float wave = sin(frequency * (xPos * 12.56) + time * speed);
      
      // Apply wave effect with strength increasing away from center
      float waveStrength = abs(xPos) * 2.0; // Strength based on distance from center
      pos.y += wave * amplitude * waveStrength * 0.3;
      
      // Apply a slight curve to flag from center
      float curve = pow(xPos * 2.0, 2.0);
      pos.y += curve * 0.2;
      
      vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * modelViewPosition;
      gl_PointSize = 10.0;
  }
`;

  // Fragment Shader - unchanged except for added comments
  const fragmentShader = `
    uniform sampler2D textureMap;
    varying vec2 vUv;
    
    void main() {
        vec4 color = texture2D(textureMap, vUv);
        gl_FragColor = vec4(color.rgb, 1.0);
    }
`;

  const uniforms = {
    textureMap: {
      value: textureMap,
    },
    time: { value: 0.0 },
  };

  // Update the time uniform in the animation loop
  useFrame(({ clock }) => {
    uniforms.time.value = clock.getElapsedTime();
  });
  const vertexShaderForHolder = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        vec3 pos = position;
        float curve = pow((uv.x - 0.5) * 4.0, 2.0);
        pos.y += curve * 0.2; // Push the sides forward to make a "curve" shape
        vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * modelViewPosition;
        gl_PointSize = 10.0;
    }
  `;
  const fragmentShaderForHolder = `
    varying vec2 vUv;
    void main() {
        vec2 uv = vUv;
        vec3 color = vec3(0.0, 0.0, 0.0); 
        gl_FragColor = vec4(color, 1.0);
    }
  `;

  const materialForLongs = new THREE.MeshBasicMaterial({ color: "#583927" });
  const geometryForLongs = new THREE.CylinderGeometry(0.01, 0.01, 2);
  const geometryForHolder = new THREE.PlaneGeometry(3, 0.01, 108, 108);
  const materialForHolder = new THREE.ShaderMaterial({
    vertexShader: vertexShaderForHolder,
    fragmentShader: fragmentShaderForHolder,
    side: THREE.DoubleSide,
  });
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
          uniforms={uniforms}
          side={THREE.DoubleSide}
        />
        <mesh
          geometry={geometryForHolder}
          material={materialForHolder}
          position={[0, 0, -0.01]}
        />
      </mesh>
    </group>
  );
}

export default Welcome;
