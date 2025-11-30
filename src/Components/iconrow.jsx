import React from "react";
import "remixicon/fonts/remixicon.css";


const iconrow = ({ name, url,color }) => {
  return (
    <>
      <div className="py-20 flex justify-center items-center w-screen overflow-hidden">
        <div className={`overflow-hidden w-60  lg:w-52  flex flex-col items-center justify-around`}>
         <i key={name} className={`${url} text-6xl md:text-[120px] text-black dark:text-cyan-800 bg-[${color}] hover:scale-105`}></i>
         <h2 className="text-black dark:text-cyan-800 text-[10px] md:text-2xl font-bold tracking-widest">{name}</h2>
        </div>
      </div>
    </>
  );
};

export default iconrow;
