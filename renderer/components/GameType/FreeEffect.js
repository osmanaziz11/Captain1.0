import React from 'react';
import Type from './Type';

const FreeEffect = () => {
  return (
    <div className="absolute w-full h-full bg-[#1514149E]  top-0  z-50">
      {/* ===== Game Type Option =====  */}
      <div className=" w-full h-full cursor-pointer  bg-transparent  overflow-hidden py-10 px-5 flex flex-wrap justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
        <Type />
        <Type />
        <Type />
        <Type />
      </div>
      {/* ===== End =====  */}
    </div>
  );
};

export default FreeEffect;
