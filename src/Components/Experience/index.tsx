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

         <div className="bg-silver-color w-full max-w-4xl h-80 rounded-[20px] mx-auto px-4 lg:px-8 mt-10">
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
                <p className="font-bold">Software Engineer</p>
            </div>
        </div>

        
        </>
    )
}

export default Experience