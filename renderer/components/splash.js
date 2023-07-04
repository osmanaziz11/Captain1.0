import Trademark from '../public/assets/trademark.svg';
import Captain from '../public/assets/CAPTAIN.svg';
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import version from '../public/assets/1.0.svg';
import Logo from '../public/assets/logo.svg';
import Image from 'next/image';
import { ipcRenderer } from 'electron';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleLoadingState = (event, result) => {
      setProgress(result);
    };

    ipcRenderer.on('isLoading', handleLoadingState);

    return () => {
      ipcRenderer.removeListener('isLoading', handleLoadingState);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#141414] flex flex-col justify-center items-center  z-50">
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
      <div className="absolute bottom-0 left- h-[2px] w-full">
        <LoadingBar
          color="#EBFF03"
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
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

export default SplashScreen;
