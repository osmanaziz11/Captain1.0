import React from 'react';

const OccupiedEffect = () => {
  return (
    <div className="absolute w-full h-full hover:bg-[#000000f1] rounded-2xl  top-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all   text-white">
      <p className="mt-10 mb-3">Single</p>
      <div className=" flex justify-center items-center ">
        <p>Player 1</p>
        <h1 className="text-5xl mx-5 font-extrabold">VS</h1>
        <p>Player 2</p>
      </div>
      <p className="my-4">10:00</p>
      <div className="">
        <h1 className="hover:text-red-700 transition-all cursor-pointer font-extrabold">
          END GAME
        </h1>
      </div>
    </div>
  );
};

export default OccupiedEffect;
