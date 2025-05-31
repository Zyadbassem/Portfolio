import { Html } from "@react-three/drei";
import ProjectElement from "./ProjectElement";

function Projects({ position, mobile = false }) {
  return (
    <Html position={position} transform>
      <ProjectElement
        title="Outfit Oasis"
        description="Biggest project I built so far. This is an E-commerce web app with authentication and an admin  page. The admin can add an item with it’s 3d model and it will be added automatically to the clothing wheel. "
        mainImg="outfitoasisimage.png"
        link="https://outfitoasis-production-c9e3.up.railway.app/"
        techImage1="expressjslogo.png"
        techImage2="reactlogo.png"
        techImage3="jslogo.png"
        techImage4="threelogo.png"
        mobile={mobile}
      />
      <ProjectElement
        title="Where to Watch This"
        description="Where to watch this is an app built in my free time. the user enters a tv show / movie title and it shows them the streaming services that has this title. simple but useful and i used watch mode api for this app "
        mainImg="wheretowatchthisapp.png"
        link="https://wheretowatchthis.vercel.app/"
        techImage1="expressjslogo.png"
        techImage2="reactlogo.png"
        techImage3="jslogo.png"
        techImage4="htmllogo.png"
        mobile={mobile}
      />
      <ProjectElement
        title="Porsche 911 page"
        description="A scroll based animation page that can be used to shoe off fancy products like the Porsche 911 car. This app helped me improve my maths skills so I could make the animation as smooth as possible."
        mainImg="porsche911photoweb.png"
        link="https://porsche911byzyad.vercel.app/"
        techImage1="threelogo.png"
        techImage2="reactlogo.png"
        techImage3="jslogo.png"
        techImage4="htmllogo.png"
        mobile={mobile}
      />
      <ProjectElement
        title="Solar System"
        description="First project I made using three js library. Simple but cool.  learnt three js basics with this project. Planets movement is paced on realistic movements (closer to the sun moves faster)"
        mainImg="solarSystem.png"
        link="https://solarsysytembyzyad.vercel.app/"
        techImage1="threelogo.png"
        techImage2="reactlogo.png"
        techImage3="jslogo.png"
        techImage4="htmllogo.png"
        mobile={mobile}
      />
    </Html>
  );
}

export default Projects;
