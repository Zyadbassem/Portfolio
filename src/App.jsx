import Experience from "./Experience/Experience";
import PhoneControls from "./PhoneControls/PhoneControls";
import { useEffect, useState } from "react";

function App() {
  const [isTouch, setIsTouch] = useState(window.innerWidth <= 1024);

  return (
    <>
      <Experience mobile={isTouch} />
      <PhoneControls mobile={isTouch} />
    </>
  );
}

export default App;
