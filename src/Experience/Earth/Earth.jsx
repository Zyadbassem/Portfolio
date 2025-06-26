import Station from "./Station";
import Fence from "./Fence/Fence";
import Building from "./Building";
import Grass from "./Grass";
import BoredSection from "./BoredSection";

function Earth() {
  return (
    <>
      {/* <Desert position={[0, -0.1, 0]} /> */}
      <Fence position={[0, 0.1, 1.5]} />
      <Building scale={[0.8, 0.8, 0.8]} position={[1.5, 0.5, -1]} />
      <Station />
      <BoredSection position={[1.5, 2, 0]} />
      <Grass />
    </>
  );
}

export default Earth;
