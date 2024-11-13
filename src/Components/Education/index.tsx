import React from "react";
import SquareShaped from "../Resuables/SqaureShaped";
import calender from "../../assets/cert-edu/cal.jpg";
import certificate from "../../assets/cert-edu/certificate-removebg-preview.png";
import graduation from "../../assets/cert-edu/grad-removebg-preview.png";



const Education: React.FC = () =>{
    return(
        <>
          <div className="text-center text-golden-color text-[2rem] mt-32">
          Education / Certificate
         </div>

         <div className="flex flex-row mt-10 gap-10 justify-center mx-auto "> 

         <div className="bg-white  w-96 h-52 rounded-[20px]">
         
         <div className="flex">
         <div className="flex flex-row gap-2 w-[13rem] h-10 bg-black rounded-[50px] ml-5 mt-5" >
        <img src={calender} className="w-8 h-8 ml-2 mt-1"/>     
        <SquareShaped text="07/2023 – 06/2024" color="white"/>
        </div>
         <img src={certificate} className="w-16 h-16 ml-20"/>
         </div>

         <div className="mt-7 ml-7">
            <p className="text-black text-[20px] font-semibold">Software Engineering</p>
            <p className="">Semicolon Africa</p>
            <p>Lagos, Nigeria</p>
         </div>

         </div>


         <div className="bg-white  w-96 h-52 rounded-[20px]">
         
         <div className="flex">
         <div className="flex flex-row gap-2 w-[13rem] h-10 bg-black rounded-[50px] ml-5 mt-5" >
        <img src={calender} className="w-8 h-8 ml-2 mt-1"/>     
        <SquareShaped text="2019" color="white"/>
        </div>
        <img src={graduation} className="w-16 h-16 ml-20"/>
         </div>

         <div className="mt-5 ml-7">
            <p className="text-black text-[20px] font-semibold flex flex-col">Senior Secondary School <span>Certificate</span></p>
            <p className="">Al-limu college</p>
            <p>Lagos, Nigeria</p>
         </div>

         </div>



         <div className="bg-white  w-96 h-52 rounded-[20px]">
         
         <div className="flex">
         <div className="flex flex-row gap-2 w-[13rem] h-10 bg-black rounded-[50px] ml-5 mt-5" >
        <img src={calender} className="w-8 h-8 ml-2 mt-1"/>     
        <SquareShaped text="2019" color="white"/>
        </div>
        <img src={graduation} className="w-16 h-16 ml-20"/>
         </div>

         <div className="mt-5 ml-7">
            <p className="text-black text-[20px] font-semibold">Undergraduate(BA)</p>
            <p className="">University Of Lagos</p>
            <p>Lagos, Nigeria</p>
         </div>

         </div>


         </div>
        
        </>
    )
}

export default Education