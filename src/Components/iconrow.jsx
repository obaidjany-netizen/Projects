import React from "react";

const iconrow = ({ name, url,color }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10 py-20">
        <div className={`overflow-hidden w-20  h-20 lg:w-52 lg:h-50 rounded-full bg-${color}-500 flex flex-col items-center justify-center gap-1.5`}>
          <img  className={`w-full  h-full aspect-3/2`} src={url} alt={name} />
        </div>
      </div>
    </>
  );
};

export default iconrow;
