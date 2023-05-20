import React from 'react';

const Item = ({ data }) => {
  return (
    <div className="w-[197px] h-[223px] bg-[#1b1b1b] rounded-md  flex flex-col justify-center items-center shadow-lg cursor-pointer me-2 mb-3">
      <div className="w-[80%] h-[65%]">
        <img
          src="/assets/item.png"
          className="w-full h-full object-contain hover:scale-110 hover:rotate-2 transition-all"
          alt=""
        />
      </div>
      <div>
        <p className="text-center text-white">{data.title}</p>
        <p className="text-center text-white">{data.price}</p>
      </div>
    </div>
  );
};

export default Item;
