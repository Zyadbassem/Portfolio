function WarningSign({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh>
        <circleGeometry args={[0.01]} />
        <meshBasicMaterial color={"#fc1a1b"} />
      </mesh>
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[0.015, 0.003]} />
        <meshBasicMaterial color={"#fff"} />
      </mesh>
    </group>
  );
}

export default WarningSign;
