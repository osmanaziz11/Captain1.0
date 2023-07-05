import React from 'react';

function Container({ title, para, children }) {
  return (
    <div className="w-[30%] mx-3 h-[270px] mt-2 rounded  bg-[#1b1b1b]  shadow mb-3">
      <div className="w-full  rounded-t shadow bg-[#252525] flex flex-col p-2 mb-2">
        <h1 className=" text-gray-300 font-medium">{title} Setting</h1>
        <p className="text-gray-300 text-xs">{para}</p>
      </div>
      {children}
    </div>
  );
}

export default Container;
