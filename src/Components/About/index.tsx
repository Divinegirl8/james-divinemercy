import React from "react";
import me from "../../assets/about/mine (1).jpg"
import SquareShaped from "../Resuables/SqaureShaped";
import headPhone from "../../assets/about/headphone-removebg-preview.png";
import pot from "../../assets/about/pot-removebg-preview.png";
import solve from "../../assets/about/solve.png";
import creativity from "../../assets/about/creativity-removebg-preview.png";
import new_things from "../../assets/about/new.png";
import movie from "../../assets/about/movie.png";
import out from "../../assets/about/ou-removebg-preview.png"

const About:React.FC = () =>{
   return(
    <>
    
    <div className="text-center text-golden-color text-[2rem] mt-1">
          About Me
    </div>

    <div className="flex flex-row gap-3 ml-20 mt-20">
      <img src={me} className="w-10 h-10 rounded-full"/>
      <p className="text-golden-color text-[18px] pt-2 ">I Love</p>
    </div>

    <div className="ml-20 mt-5">

      <div className="flex flex-row gap-2">

      <div className="flex flex-row gap-2 w-[13rem] h-10 bg-white rounded-[50px] " >
       <img src={headPhone} className="w-8 h-8 ml-2 mt-1"/>     
      <SquareShaped text="Listening to Music" color="black"/>
      </div>

      <div className="flex flex-row gap-1 w-[9rem] h-10 bg-white rounded-[50px] " >
      <img src={pot} className="w-9 h-9 ml-2 mt-1"/> 
      <SquareShaped text="Cooking" color="black"/>
      </div>

      <div className="flex flex-row gap-1 w-[9rem] h-10 bg-white rounded-[50px] " >
      <img src={creativity } className="w-5 h-5 ml-2 mt-2"/> 
      <SquareShaped text="Creativity" color="black"/>
      </div>

    
      </div>


      <div className="flex flex-row gap-2 mt-3">
    <div className="flex flex-row gap-1 w-[13rem] h-10 bg-white rounded-[50px] " >
      <img src={solve} className="w-5 h-5 ml-2 mt-2"/> 
      <SquareShaped text="Solving Problem" color="black"/>
      </div>

      <div className="flex flex-row gap-1 w-[14rem] h-10 bg-white rounded-[50px] " >
      <img src={new_things} className="w-5 h-5 ml-2 mt-2"/> 
      <SquareShaped text="Exploring New Things" color="black"/>
      </div>
    </div>

    <div className="mt-3 flex flex-row gap-2">
    <div className="flex flex-row gap-1 w-[12rem] h-10 bg-white rounded-[50px] " >
      <img src={movie} className="w-5 h-5 ml-2 mr-1 mt-[10px]"/> 
      <SquareShaped text="Watching Movie" color="black"/>
      </div>

      <div className="flex flex-row gap-1 w-[10rem] h-10 bg-white rounded-[50px] " >
      <img src={out} className="w-5 h-5 ml-2 mr-1 mt-[10px]"/> 
      <SquareShaped text="Hanging Out" color="black"/>
      </div>

    </div>
    </div>


    <div className="p-6 sm:p-12 md:p-16 lg:pt-20  text-center">
  <div className="bg-ash-color text-white mx-auto p-8 rounded-lg">
    <p>
      I'm a dedicated Software Engineer with a passion for crafting reliable, efficient,
      and scalable software solutions. Skilled in modern development practices,
      I enjoy working with a range of technologies, including Java, JavaScript, Python, Node.js,
      and frameworks like React, Next.js, and Vue.js.

      Driven by a love for coding and continuous learning, I take pride in writing clean,
      maintainable code that not only functions flawlessly but also enhances the overall
      performance of applications. My journey has been fueled by a desire to solve real-world problems,
      with a track record of successfully delivering projects across diverse industries.

      With a strong foundation in backend development, database management, and cloud services,
      I enjoy diving into complex challenges and collaborating with cross-functional teams to bring ideas to life.
      I’m constantly pushing my own boundaries to stay on top of emerging tech trends and am committed to building
      impactful digital solutions.
    </p>
  </div>
</div>
   
   
<div className="flex flex-row gap-2  justify-center mx-auto">
  <div className="flex flex-row justify-center items-center w-[10rem] h-10 bg-white rounded-[50px] text-center">
    <p className="text-center font-semibold cursor-pointer">Contact Me</p>
  </div>
</div>


    
    </>
   )
}

export default About