import React, { useState } from 'react';
import GameOptions from './GameOption';

const FreeEffect = (props) => {
  return (
    <div className="absolute w-full h-full bg-[#1514149E]  top-0  z-50 hover:z-0 rounded-lg hover:bg-[#000000d3]  transition">
      {/* ===== Game Type Option =====  */}
      <div className=" w-full h-full cursor-pointer  bg-transparent  overflow-hidden pt-10 px-5 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
        <GameOptions />
      </div>
      {/* ===== End =====  */}
    </div>
  );
};

export default FreeEffect;
