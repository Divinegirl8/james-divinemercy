import React from "react";
import HeroPage from "../../Components/HeroPage";
import About from "../../Components/About";
import Education from "../../Components/Education";
import Skills from "../../Components/Skills";

const Homepage : React.FC = () =>{
   return(
   <>
   <HeroPage/>
   <About/>
   <Education/>
   <Skills/>
   
   </>
   )
}
export default Homepage