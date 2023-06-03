import React, { useState } from 'react';

const Double = () => {
  const [vs, setVS] = useState(false);
  function Vs() {
    return (
      <div className=" flex justify-center items-center mb-">
        <input
          type="text"
          name=""
          id=""
          placeholder="Player 1"
          className="text-end   bg-transparent outline-none text-gray-400 placeholder-gray-400 "
        />
        <h1
          className="text-xl mx-5 font-extrabold text-white"
          onClick={() => setVS(false)}
        >
          VS
        </h1>
        <input
          type="text"
          name=""
          placeholder="Player 2"
          id=""
          className="text-start   bg-transparent outline-none text-gray-400 placeholder-gray-400 "
        />
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-transparent mb-1 pt-2  flex flex-col justify-center items-center">
      <h1 className="text-white font-medium ">Double 6 Ball</h1>
      <Vs />
      <Vs />
      {vs ? (
        <div>
          <Vs />
        </div>
      ) : (
        <div
          className="h-[18px] my-1 w-[30px] text-sm flex justify-center items-center  border-dotted border-2 border-red-800 text-white font-medium"
          onClick={() => setVS(true)}
        >
          +
        </div>
      )}
      <div>
        <p className="text-center text-green-700 font-medium text-sm mb-3">
          Let's Play
        </p>
      </div>
    </div>
  );
};

export default Double;
