import { Text3D, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function ArrowAndText({ text, position }) {
  const textRef = useRef();
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.z = Math.cos(clock.elapsedTime) * 2 - 20; // Rotate the text
      textRef.current.position.x = Math.sin(clock.elapsedTime) * 2 - 10; // Rotate the text
    }
  });
  return (
    <>
      <Center position={position} ref={textRef}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
        >
          {text}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}

export default ArrowAndText;
