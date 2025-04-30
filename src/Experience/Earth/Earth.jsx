import Sky from "./Sky";
import Grass from "./Grass";
import Trees from "./Trees";
import Station from "./Station";
import Welcome from "./Welcome";
import Desert from "./Desert/Desert";
import Rocks from "./Rocks";

function Earth() {
  return (
    <>
      {/* <Grass /> */}
      {/* <Sky /> */}
      {/* <Trees /> */}
      <Desert position={[0, -0.1, 0]} />
      {/* <Rocks /> */}
      <Station />
      <Welcome />
    </>
  );
}

export default Earth;
