import React from "react";
import heroPicture from "../../assets/hero-page/my-pic__1_-removebg-preview.png";
import style from "./index.module.css"

const HeroPage: React.FC = () => {
  return (
    <>
      <div className={`bg-hero-picture bg-cover bg-center pt-[38rem]  flex justify-center items-center`}>
        <div className="flex justify-center items-center">
        <img src={heroPicture} className="mt-[-30rem]"/>
        </div>
      </div>
      <div className="text-white text-center flex items-center justify-center">
            <p className={`text-[3rem] ${style.typingEffect}`}>Hello! I'm <span className="text-golden-color">James DivineMercy</span></p>
      </div>
      <p className="text-white text-[25px] text-center">A Software Engineer</p>

    </>
  );
};

export default HeroPage;

