import Station from "./Station";
import Welcome from "./Welcome";
import Desert from "./Desert/Desert";
import Tambleweed from "./Desert/Tambleweed";
import Fence from "./Fence/Fence";
import Building from "./Building";

function Earth() {
  return (
    <>
      <Desert position={[0, -0.1, 0]} />
      <Fence position={[0, 0.1, 1.5]} />
      <Building scale={[0.8, 0.8, 0.8]} position={[1, 0.5, -1]} />
      <Station />
      {/* <Welcome /> */}
    </>
  );
}

export default Earth;
