import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Moon({ position = [0, 0, 0] }) {
  const mapTexture = useTexture("/project_assets/moonTexture/moonTextures.jpg");
  const vertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`;

  const fragmentShader = `
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vec3 tex = texture2D(uTexture, vUv).rgb;

        // Light direction from right side
        vec3 lightDir = normalize(vec3(1.0, 0.0, 0.0));

        // Calculate simplified lighting
        float diff = step(0.0, dot(vNormal, lightDir));

        // Mix with a softer transition for stylized look
        float softEdge = smoothstep(-0.2, 0.2, dot(vNormal, lightDir));
        diff = mix(0.3, 1.0, softEdge);

        // Stylize colors - make them more vibrant and less nuanced
        vec3 brightColor = vec3(0.6, 0.6, 0.9); // Yellowish bright side
        vec3 darkColor = vec3(0.2, 0.2, 0.4);    // Blueish dark side

        // Mix colors based on lighting
        vec3 stylizedColor = mix(darkColor, brightColor, softEdge);

        // Apply texture but with less influence for a more stylized look
        vec3 finalColor = mix(stylizedColor, tex, 0.4);

        gl_FragColor = vec4(finalColor, 1.0);
      }`;
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: { uTexture: { value: mapTexture } },
  });

  const moonRef = useRef();
  useFrame(({ clock }) => {
    if (moonRef.current) {
      moonRef.current.rotation.y = clock.getElapsedTime() * 0.1; // Rotate the moon
    }
  });
  return (
    <mesh position={position} material={material} ref={moonRef}>
      <sphereGeometry args={[3, 32, 32]} />
    </mesh>
  );
}

export default Moon;
