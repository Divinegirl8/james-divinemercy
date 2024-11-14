import React from "react";
import SquareShaped from "../Resuables/SqaureShaped";
import calender from "../../assets/experience/calendy-removebg-preview.png";
import semicolon from "../../assets/experience/semicolon-removebg-preview.png";
import location from "../../assets/experience/location-gold-removebg-preview.png";


const Experience = () => {
    return(
        <>
         <div className="text-golden-color text-[2rem] mt-28 ml-10 text-center">
           <p className="mt-16">Experience</p>
         </div>

         <div className="bg-silver-color w-full max-w-4xl h-[25rem] rounded-[20px] mx-auto px-4 lg:px-8 mt-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 w-[14rem] h-[3.3rem] bg-black rounded-[50px] mt-5">
                <img src={semicolon} className="w-[4.5rem] h-[4.5rem] ml-[-9px] mt-[-8px]" alt="Calendar Icon" />
                <div>
                <p className="text-golden-color font-semibold mt-1 ml-[-10px]">Semicolon Africa</p>
                <div className="flex flex-row gap-3  ml-[-10px]">
                    <img src={location} className="w-5 h-5"/>
                    <p className="text-white text-[13px] ml-[-10px]">Lagos, Nigeria</p>
                    </div>
                </div>
                </div>

                <div className="flex flex-row gap-2 w-[13rem] h-10 bg-white rounded-[50px] ml-5 mt-5">
                <img src={calender} className="w-6 h-6 ml-2 mt-2" alt="Calendar Icon" />
                <SquareShaped text="Aug 2024 – Present" color="black" />
                </div>
                
            </div>
            <div className="mt-7 ml-2">
                <h1 className="font-bold text-xl">Backend Engineer Intern</h1>
                <div className="mt-5 space-y-3">
                    <p>&#8594; Designed and maintained RESTful APIs for seamless integration between the frontend and backend</p>
                    <p>&#8594; Collaborated closely with cross-functional teams, including developers, cloud engineers, QA, and designers</p>
                    <p>&#8594; Wrote and maintained documentation for API endpoints, database schemas, and system architecture</p>
                    <p>&#8594; Optimized server and database performance, reducing response times by leveraging caching and indexing</p>
                    <p>&#8594; Wrote and maintained unit and integration tests to ensure code quality and prevent regressions</p>
                    <p>&#8594; Debugged and resolved issues in production systems, ensuring reliability and uptime</p>
                </div>
            </div>

        </div>

        
        </>
    )
}

export default Experience