import Station from "./Station";
import Welcome from "./Welcome";
import Desert from "./Desert/Desert";
import Tambleweed from "./Desert/Tambleweed";

function Earth() {
  return (
    <>
      <Desert position={[0, -0.1, 0]} />
      <Tambleweed
        initialPosition={[Math.random() * 10, 0.2, Math.random() * -5]}
        xValue={0.01}
        zValue={0.03}
        max={10}
      />
      <Tambleweed
        initialPosition={[Math.random() * 10, 0.2, Math.random() * -5]}
        xValue={0.03}
        zValue={0.05}
        max={10}
      />
      <Tambleweed
        initialPosition={[Math.random() * 10, 0.2, Math.random() * -5]}
        xValue={-0.01}
        zValue={-0.03}
        max={10}
      />

      <Station />
      <Welcome />
    </>
  );
}

export default Earth;
