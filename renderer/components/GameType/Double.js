import React, { useState } from 'react';

const Double = () => {
  const [vs, setVS] = useState(false);
  function Vs() {
    return (
      <div className=" flex justify-center items-center mb-2">
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
    <div className="w-full h-full bg-transparent mb-4  flex flex-col justify-center items-center">
      <h1 className="text-white font-medium mb-2">Double 6 Ball</h1>
      <Vs />
      <Vs />
      {vs ? (
        <div>
          <Vs />
        </div>
      ) : (
        <div
          className="h-[10px] text-red-800 font-medium"
          onClick={() => setVS(true)}
        >
          <p>Add</p>
        </div>
      )}
      <div>
        <p className="text-center text-green-700 font-medium text-sm">
          Let's Play
        </p>
      </div>
    </div>
  );
};

export default Double;
