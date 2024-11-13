import React from "react";
import SquareShaped from "../Resuables/SqaureShaped";
import html5 from "../../assets/skill/html.png"
import css from "../../assets/skill/css.png"
import javascript from "../../assets/skill/javascript.png"
import bootstrap from "../../assets/skill/bootsrap.png"
import react from "../../assets/skill/react.png"
import redux from "../../assets/skill/redux.png"
import next from "../../assets/skill/next.png"
import tailwindcss from "../../assets/skill/tailwindcss.png"
import java from "../../assets/skill/java.png"
import python from "../../assets/skill/python.png"
import springboot from "../../assets/skill/springboot.png"
import jbpm from "../../assets/skill/jbpm.png"
import node from "../../assets/skill/node.png"
import docker from "../../assets/skill/docker.png"
import vue from "../../assets/skill/vuejs.png"
import apollo from "../../assets/skill/apollo.png"
import materialui from "../../assets/skill/materialUi-removebg-preview.png"
import git from "../../assets/skill/git-removebg-preview.png"
import figma from "../../assets/skill/fig-removebg-preview.png"
import mongodb from "../../assets/skill/mongodbpix-removebg-preview.png"
import mysql from "../../assets/skill/mysql-removebg-preview.png"
import postgres from "../../assets/skill/postgres-removebg-preview.png"
import linux from "../../assets/skill/linux-removebg-preview.png"
import windows from "../../assets/skill/windows-removebg-preview.png"
import ios from "../../assets/skill/ios-removebg-preview.png"
import typescript from "../../assets/skill/ts-removebg-preview.png"
import junit from "../../assets/skill/junit-removebg-preview.png"
import render from "../../assets/skill/render-removebg-preview.png"
import postman from "../../assets/skill/postman-removebg-preview.png"
import pytest from "../../assets/skill/pytest-removebg-preview.png"

const Skills:React.FC = () =>{
    return(
        <>
        
        <div className="text-center text-golden-color text-[2rem] mt-28">
           <p> Skills</p>
           <p className="mt-16">Technologies I Use</p>
         </div>

         
        
         <div className="flex flex-row gap-2 justify-center mx-auto  mt-10">

        <div className="flex flex-row gap-2 w-[8rem] h-10 bg-white rounded-[50px] " >
        <img src={html5} className="w-6 h-6 ml-3 mt-2"/>     
        <SquareShaped text="Html5" color="black"/>
        </div>

        <div className="flex flex-row gap-1 w-[7rem] h-10 bg-white rounded-[50px] " >
        <img src={css} className="w-8 h-8 ml-2 mt-1"/> 
        <SquareShaped text="Css3" color="black"/>
        </div>

        <div className="flex flex-row gap-1 w-[9rem] h-10 bg-white rounded-[50px] " >
        <img src={javascript} className="w-5 h-5 ml-3 mt-2 mr-2"/> 
        <SquareShaped text="Javascript" color="black"/>
        </div>

        <div className="flex flex-row gap-2 w-[9rem] h-10 bg-white rounded-[50px] " >
        <img src={bootstrap} className="w-5 h-5 ml-3 mt-[10px]"/>     
        <SquareShaped text="BootStrap" color="black"/>
        </div>

        <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
        <img src={react} className="w-5 h-5 ml-3 mt-[10px]"/> 
        <SquareShaped text="ReactJs" color="black"/>
        </div>

        <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
        <img src={redux} className="w-5 h-5 ml-3 mt-2 mr-1"/> 
        <SquareShaped text="Redux" color="black"/>
        </div>

        <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
        <img src={next} className="w-5 h-5 ml-3 mt-2 mr-1"/> 
        <SquareShaped text="NextJs" color="black"/>
        </div>


        <div className="flex flex-row gap-1 w-[10rem] h-10 bg-white rounded-[50px] " >
        <img src={tailwindcss} className="w-7 h-7 ml-3 mt-1"/> 
        <SquareShaped text="TailwindCss" color="black"/>
        </div>

        <div className="flex flex-row gap-2 w-[9rem] h-10 bg-white rounded-[50px] " >
            <img src={mongodb} className="w-6 h-6 ml-2 mt-[9px]"/>     
            <SquareShaped text="MongoDb" color="black"/>
            </div>

        </div>



        <div className="flex flex-row gap-2 justify-center mx-auto  mt-5">

          <div className="flex flex-row gap-2 w-[8rem] h-10 bg-white rounded-[50px] " >
          <img src={java} className="w-8 h-8 ml-2 mt-1"/>     
          <SquareShaped text="Java" color="black"/>
          </div>

          <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
          <img src={python} className="w-8 h-8 ml-2 mt-1"/> 
          <SquareShaped text="Python" color="black"/>
          </div>

          <div className="flex flex-row gap-1 w-[9rem] h-10 bg-white rounded-[50px] " >
          <img src={springboot} className="w-7 h-7 ml-2 mt-1"/> 
          <SquareShaped text="SpringBoot" color="black"/>
          </div>

          <div className="flex flex-row gap-2 w-[7rem] h-10 bg-white rounded-[50px] " >
          <img src={jbpm} className="w-6 h-6 ml-2 mt-2"/>     
          <SquareShaped text="Jbpm" color="black"/>
        </div>

        <div className="flex flex-row gap-1 w-[7rem] h-10 bg-white rounded-[50px] " >
        <img src={node} className="w-6 h-6 ml-2 mt-2"/> 
        <SquareShaped text="NodeJs" color="black"/>
        </div>

            <div className="flex flex-row gap-1 w-[7rem] h-10 bg-white rounded-[50px] " >
            <img src={docker} className="w-6 h-6 ml-2 mt-2"/> 
            <SquareShaped text="Docker" color="black"/>
            </div>


            <div className="flex flex-row gap-1 w-[6rem] h-10 bg-white rounded-[50px] " >
            <img src={vue} className="w-5 h-4 ml-2 mt-3 "/> 
            <SquareShaped text="VueJs" color="black"/>
            </div>

            <div className="flex flex-row gap-2 w-[8rem] h-10 bg-white rounded-[50px] " >
            <img src={linux} className="w-8 h-8 ml-2 mt-1"/>     
            <SquareShaped text="Linux" color="black"/>
            </div>
            </div>

            <div className="flex flex-row gap-2 mt-5 justify-center mx-auto ">
            <div className="flex flex-row gap-2 w-[13rem] h-10 bg-white rounded-[50px] " >
            <img src={apollo} className="w-7 h-7 ml-2 mt-[6px]"/>     
            <SquareShaped text="Apollo GraphQl" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[10rem] h-10 bg-white rounded-[50px] " >
            <img src={materialui} className="w-9 h-9 ml-2 mt-[1px]"/> 
            <SquareShaped text="Material Ui" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[5rem] h-10 bg-white rounded-[50px] " >
            <img src={git} className="w-5 h-5 ml-2 mt-2"/> 
            <SquareShaped text="Git" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[13rem] h-10 bg-white rounded-[50px] " >
            <img src= {figma} className="w-5 h-5 ml-3 mt-2"/> 
            <SquareShaped text="Figma (Design Tool)" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
            <img src={mysql} className="w-9 h-9 ml-2 mt-1"/> 
            <SquareShaped text="MySql" color="black"/>
            </div>
             </div>


             <div className="flex flex-row gap-2 mt-10 justify-center mx-auto ">
            <div className="flex flex-row gap-2 w-[9rem] h-10 bg-white rounded-[50px] " >
            <img src={typescript} className="w-8 h-6 ml-2 mt-[10px]"/>     
            <SquareShaped text="Typescript" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[9rem] h-10 bg-white rounded-[50px] " >
            <img src={react} className="w-5 h-5 ml-2 mt-[10px] mr-1"/> 
            <SquareShaped text="ReactNative" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[6rem] h-10 bg-white rounded-[50px] " >
            <img src={junit} className="w-7 h-7 ml-2 mt-1"/> 
            <SquareShaped text="JUnit" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
            <img src={postgres} className="w-6 h-5 ml-3 mt-[10px]"/> 
            <SquareShaped text="Postgres" color="black"/>
            </div>

             </div>
   
             <div className="flex flex-row gap-2 mt-10 justify-center mx-auto ">
             <div className="flex flex-row gap-1 w-[7rem] h-10 bg-white rounded-[50px] " >
            <img src={render} className="w-5 h-5 ml-2 mt-[10px]"/> 
            <SquareShaped text="Render" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
            <img src={postman} className="w-7 h-7 ml-2 mt-1"/> 
            <SquareShaped text="Postman" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[5rem] h-10 bg-white rounded-[50px] " >
            <img src={ios} className="w-5 h-5 ml-2 mt-2"/> 
            <SquareShaped text="Mac" color="black"/>
            </div>

            </div>


            <div className="flex flex-row gap-2 mt-10 justify-center mx-auto ">
             <div className="flex flex-row gap-1 w-[7rem] h-10 bg-white rounded-[50px] " >
            <img src={pytest} className="w-7 h-7 ml-2 mt-2"/> 
            <SquareShaped text="Pytest" color="black"/>
            </div>

            <div className="flex flex-row gap-1 w-[8rem] h-10 bg-white rounded-[50px] " >
            <img src={windows} className="w-5 h-5 ml-2 mt-[10px] mr-1"/> 
            <SquareShaped text="Windows" color="black"/>
            </div>

            </div>



       


          

        
        </>
    )
}

export default Skills