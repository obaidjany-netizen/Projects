import React from "react";
import HeroText from "../Components/herotext";
import MyPfp from "../Components/heroimage";
const hero = () => {
  return (
    <>
      <div className="flex  md:h-[80vh] lg:h-screen 
       flex-col md:flex-row gap-10 justify-between items-start sm:items-center w-screen
       overflow-hidden p-2 md:p-10 
      bg-[linear-gradient(-200deg,transparent,transparent,#007595)]  ">
        <HeroText />
        <MyPfp />
      </div>
    </>
  );
};

export default hero;
