import React from 'react';

const OccupiedEffect = () => {
  return (
    <div className="absolute w-full h-full bg-[#000000A3] rounded-2xl  top-0 flex justify-center items-center text-5xl font-extrabold text-white">
      <h1 className="hover:text-red-700 transition-all cursor-pointer">
        END GAME
      </h1>
    </div>
  );
};

export default OccupiedEffect;
