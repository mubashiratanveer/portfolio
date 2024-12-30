import About from "../about/page";
import Contact from "../contact/page";
import HeroSection from "../home/page";
import ProjectPage from "../projects/page";
import Skill from "../skills/page";




export default function LandingPage(){
    return(
        <div>
            <HeroSection/>
            <About/>
            <ProjectPage/>
            <Skill/>
            <Contact/>
        </div>
    )
}