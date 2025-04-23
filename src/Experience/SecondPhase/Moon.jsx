import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Moon({ position = [0, 0, 0] }) {
  const mapTexture = useTexture("/project_assets/moonTexture/moonTextures.jpg");
  const flagTexture = useTexture(
    "/project_assets/moonTexture/flagTexture/egypt_flag.jpg",
  );

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

  const fragmentShaderForFlag = `
      uniform sampler2D textureMap;
      varying vec2 vUv;

      void main() {
          vec4 color = texture2D(textureMap, vUv);
          gl_FragColor = vec4(color.rgb, 1.0);
      }
    `;
  const vertexShaderForFlag = `
    uniform float time;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 pos = position;

        // Base wave parameters
        float baseFrequency = 1.0;
        float baseAmplitude = 0.04;
        float speed = 1.5;

        // Wind gust parameters
        float gustFrequency = 0.2;
        float gustStrength = 0.2;

        // Calculate distance from left edge
        float distanceFromLeft = uv.x;
        float distanceFromTop = uv.y;

        // Create diagonal wave patterns
        float diagonalWave = sin(
            baseFrequency * (pos.x + pos.y + time * speed)
        ) * baseAmplitude * distanceFromLeft;

        // Secondary diagonal wave for complexity
        float secondaryWave = cos(
            baseFrequency * 1.5 * (pos.x - pos.y + time * (speed * 0.7))
        ) * (baseAmplitude * 0.5) * distanceFromLeft;

        // Create wind gust effect
        float timeOffset = time * speed;
        float gust = sin(gustFrequency * time) * gustStrength +
                     sin(gustFrequency * 0.7 * time) * (gustStrength * 0.5);

        // Combine waves with gust effect
        float combinedWave = diagonalWave + secondaryWave;
        combinedWave *= (1.0 + gust * distanceFromLeft);

        // Apply vertical displacement
        pos.y += combinedWave * (1.0 - pow(distanceFromTop - 0.5, 2.0));

        // Apply horizontal displacement for more natural movement
        pos.z += combinedWave * 0.3 * distanceFromLeft;

        // Apply gravity effect
        pos.y -= pow(distanceFromLeft, 2.0) * 0.2;

        // Add some subtle ripples
        float ripples = sin(20.0 * distanceFromLeft + time * 3.0) *
                        sin(15.0 * distanceFromTop + time * 2.0) *
                        0.02 * distanceFromLeft;
        pos.y += ripples;

        // Add some turbulence
        float turbulence = sin(time * 3.0 + pos.x * 5.0) *
                           cos(time * 2.0 + pos.y * 4.0) *
                           0.03 * distanceFromLeft;
        // pos.y += turbulence;
        // pos.z += turbulence * 0.1;

        // Edge flutter effect
        float edgeFlutter = sin(time * 10.0 + pos.y * 20.0) *
                            0.02 * pow(distanceFromLeft, 3.0);
        pos.y += edgeFlutter;

        // Update position
        vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * modelViewPosition;
    }
`;

  const uniformsForFlag = {
    textureMap: {
      value: flagTexture,
    },
    time: { value: 0.0 },
  };
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: { uTexture: { value: mapTexture } },
  });
  const materialForFlag = new THREE.ShaderMaterial({
    vertexShader: vertexShaderForFlag,
    fragmentShader: fragmentShaderForFlag,
    uniforms: uniformsForFlag,
    side: THREE.DoubleSide,
  });
  const moonRef = useRef();
  useFrame(({ clock }) => {
    if (uniformsForFlag.time) {
      uniformsForFlag.time.value = clock.getElapsedTime();
    }
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.01; // Rotate the moon
    }
  });
  return (
    <group position={position} ref={moonRef}>
      <mesh material={material}>
        <sphereGeometry args={[3, 32, 32]} />
      </mesh>
      <group position={[0, 4, 0]}>
        <mesh material={materialForFlag}>
          <planeGeometry args={[1, 0.5]} />
        </mesh>
        <mesh position={[-0.48, -0.55, -0.01]}>
          <planeGeometry args={[0.05, 1]} />
          <meshBasicMaterial side={THREE.DoubleSide} color={"#482900"} />
        </mesh>
      </group>
    </group>
  );
}

export default Moon;
