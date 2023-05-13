import Trademark from '../public/assets/trademark.svg';
import Captain from '../public/assets/CAPTAIN.svg';
import version from '../public/assets/1.0.svg';
import Logo from '../public/assets/logo.svg';
import LoadingBar from 'react-top-loading-bar';
import Image from 'next/image';
import React, { useState } from 'react';

const Splash = () => {
  const [progress, setProgress] = useState(30);
  return (
    <div className="w-full h-screen bg-[#141414] flex flex-col justify-center items-center relative">
      <div className="flex items-end  w-full justify-center ps-7">
        <Image src={Captain} className="ms-10" width={250} alt="title"></Image>
        <div className="mb-4 mx-3">
          <Image src={version} width={24} alt="title"></Image>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[170px] mb-7 mt-4">
          <Image src={Logo} className="" alt="logo" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[160px] ">
          <Image src={Trademark} className="" alt="logo" />
        </div>
      </div>
      <div className="absolute bottom-0 h-[2px] w-full">
        <LoadingBar
          color="#EBFF03"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={2}
          shadow={false}
          containerClassName="rounded-lg"
          className="rounded-lg"
          containerStyle={{ position: 'absolute' }}
          background="transparent"
          waitingTime={400}
        />
      </div>
    </div>
  );
};

export default Splash;
