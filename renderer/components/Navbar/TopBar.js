import React from 'react';

const TopBar = () => {
  return (
    <div className="topNav h-[50px] flex  items-center px-5">
      <div className="w-full h-full  flex items-center logo_container justify-between pe-5">
        <div className="w-[200px] h-full  flex items-center ">
          <img src="/assets/Captain.svg" className="w-[100px]" alt="" />
          <img src="/assets/1.0.svg" className="w-[15px] mx-1 mt-2" alt="" />
        </div>
        <span>
          <img src="/assets/notification.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
