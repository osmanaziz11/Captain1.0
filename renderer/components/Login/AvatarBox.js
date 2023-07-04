import React from 'react';

function AvatarBox({ avatar, handler }) {
  return (
    <div
      className="flex justify-center items-center flex-col shadow-xl bg-[#1b1b1b] pb-10 transition me-10 hover:scale-105 cursor-pointer"
      onClick={handler}
    >
      <div className="w-[170px] mb-7 mt-4 rounded-full h-[170px]  mx-10  transition overflow-hidden cursor-pointer">
        <img
          src={`/assets/${avatar === 'avatar' ? 'avatar' : 'avatar'}.webp`}
          className="w-full h-full  object-cover"
          alt="title"
        ></img>
      </div>
      <h1 className="linear-gradient font-medium text-lg">
        <img
          src={`/assets/${avatar === 'admin' ? 'admin' : 'user'}.svg`}
          className="w-full h-full overflow-hidden object-cover"
          alt="title"
        ></img>
      </h1>
    </div>
  );
}

export default AvatarBox;
