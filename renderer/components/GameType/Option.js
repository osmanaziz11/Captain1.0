import React from 'react';

const Option = ({ type }) => {
  return (
    <div className=" w-20 h-20 relative flex justify-center items-center mx-1 rounded">
      <img
        src={`/assets/${type.image}`}
        alt=""
        className="w-full h-full object-cover rounded"
      />
      <div className="bg-[#000000A3] rounded  absolute h-full w-full flex justify-center items-center  px-2 text-white font-bold tracking-wide font-sans hover:text-lg ">
        <h1 className="text-center ">{type.name}</h1>
      </div>
    </div>
  );
};

export default Option;
