import React from 'react';

const Option = ({ game, setGameState }) => {
  return (
    <div
      className=" w-20 h-20 relative flex justify-center items-center mx-1 rounded cursor-pointer"
      onClick={() => setGameState(game)}
    >
      <img
        src={`/assets/${game.img}`}
        alt=""
        className="w-full h-full object-cover rounded"
      />
      <div className="bg-[#000000A3] rounded  absolute h-full w-full flex justify-center items-center  px-2 text-white font-bold tracking-wide font-sans hover:text-lg ">
        <h1 className="text-center font-bold">{game.type}</h1>
      </div>
    </div>
  );
};

export default Option;
