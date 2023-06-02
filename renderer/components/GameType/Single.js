import React from 'react';

const Single = () => {
  return (
    <div className="w-full h-full bg-transparent mb-4  flex flex-col justify-center items-center">
      <h1 className="text-white font-medium">Single 6 Ball</h1>
      <div className=" flex justify-center items-center my-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Player 1"
          className="text-end   bg-transparent outline-none text-gray-400 placeholder-gray-400 "
        />
        <h1 className="text-xl mx-5 font-extrabold text-white">VS</h1>
        <input
          type="text"
          name=""
          placeholder="Player 2"
          id=""
          className="text-start   bg-transparent outline-none text-gray-400 placeholder-gray-400 "
        />
      </div>
      <div>
        <p className="text-center text-green-700 font-medium text-sm">
          Let's Play
        </p>
      </div>
    </div>
  );
};

export default Single;
