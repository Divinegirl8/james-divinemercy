import React from "react";
import SquareShaped from "../Resuables/SqaureShaped";
import calender from "../../assets/cert-edu/cal.jpg";
import certificate from "../../assets/cert-edu/certificate-removebg-preview.png";

const Experience = () => {
    return(
        <>
         <div className="text-golden-color text-[2rem] mt-28 ml-10 text-center">
           <p className="mt-16">Experience</p>
         </div>

         <div className="bg-white w-full max-w-4xl h-80 rounded-[20px] mx-auto px-4 lg:px-8 mt-10">
            <div className="flex">
                <div className="flex flex-row gap-2 w-[13rem] h-10 bg-black rounded-[50px] ml-5 mt-5">
                <img src={calender} className="w-8 h-8 ml-2 mt-1" alt="Calendar Icon" />
                <SquareShaped text="08/2024 – Present" color="white" />
                </div>
                <img src={certificate} className="w-16 h-16 ml-20" alt="Certificate Icon" />
            </div>

            <div className="mt-7 ml-7">
                <p className="text-black text-[20px] font-semibold">Software Engineering</p>
                <p className="">Semicolon Africa</p>
                <p>Lagos, Nigeria</p>
            </div>
        </div>

        
        </>
    )
}

export default Experience