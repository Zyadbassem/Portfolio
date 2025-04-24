import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function MeteoriteFlames({
  countHolder = 1000,
  maxWidth = 1,
  maxHeight = 1,
  maxDepth = 1,
  speed = 0.1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  initialImpulse = 1,
}) {
  const pointsRef = useRef();
  const geometry = useMemo(() => {
    const count = countHolder;
    const positionArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    const velocityArray = new Float32Array(count);
    const lifeArray = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      let x = (Math.random() - 0.5) * maxWidth;
      let y = (Math.random() - 0.5) * maxHeight;
      let z = (Math.random() - 0.5) * maxDepth;

      if (y > -maxHeight / 2) {
        x > 0 ? (x -= y / 15 + 0.15) : (x += y / 15 + 0.15);
      }

      positionArray[i * 3] = x;
      positionArray[i * 3 + 1] = y;
      positionArray[i * 3 + 2] = z;
      colorArray[i * 3] = 0.8 + Math.random() * 0.2;
      colorArray[i * 3 + 1] = 0.3 + Math.random() * 0.5;
      colorArray[i * 3 + 2] = Math.random() * 0.2;
      velocityArray[i] = speed + Math.random() * speed * 2;
      lifeArray[i] = 1.0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionArray, 3),
    );
    geometry.setAttribute(
      "velocity",
      new THREE.BufferAttribute(velocityArray, 1),
    );
    geometry.setAttribute("life", new THREE.BufferAttribute(lifeArray, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));
    return geometry;
  }, [countHolder, maxWidth, maxHeight, maxDepth, speed]);

  const material = useMemo(() => {
    const normalizedImpulse = initialImpulse / 10;
    const vertexShader = `
      uniform float impluse;
      attribute float life;
      varying vec3 vColor;
      void main() {
        vec3 pos = position;
        vec3 startColor = vec3(1.0, 0, 0);  // Orange-red
        vec3 endColor = vec3(0.1, 0.4, 0.8);     // Light blue
        vec3 baseColor = mix(startColor, endColor, impluse);
        vec3 color = baseColor * life;
        vColor = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 10.0 * life;
      }
    `;
    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0 - dist); // Alpha fades towards edges
      }
    `;
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      uniforms: {
        impluse: { value: normalizedImpulse },
      },
      blending: THREE.AdditiveBlending,
    });
  }, [initialImpulse]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const positions = geometry.attributes.position.array;
    const velocities = geometry.attributes.velocity.array;
    const life = geometry.attributes.life.array;
    const count = countHolder;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      let y = positions[i3 + 1];
      const vy = velocities[i];
      y += vy * delta;

      if (y > maxHeight / 2) {
        // Reset particle to bottom with new position and velocity
        const newY = -maxHeight / 2 + Math.random() * 0.1;
        const newX = (Math.random() - 0.5) * maxWidth;
        const newZ = (Math.random() - 0.5) * maxDepth;

        positions[i3] = newX;
        positions[i3 + 1] = newY;
        positions[i3 + 2] = newZ;
        velocities[i] = speed + Math.random() * speed * 2;
        y = newY;
      } else {
        positions[i3 + 1] = y;
      }

      // Update life based on Y position (1 at bottom, 0 at top)
      life[i] = 1 - (y + maxHeight / 2) / maxHeight;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.life.needsUpdate = true;
  });

  return (
    <points
      ref={pointsRef}
      args={[geometry, material]}
      position={position}
      rotation={rotation}
    />
  );
}

export default MeteoriteFlames;
