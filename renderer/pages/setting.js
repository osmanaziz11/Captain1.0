import Container from '../components/Setting/Container';
import React from 'react';

const Setting = () => {
  return (
    <div className="w-full  p-5 flex flex-wrap justify-center items-center">
      <Container title="Tables" para="Set your snooker tables name." />
      <Container title="Games" para="Set your game rates." />
      <Container title="Profile" para="Set discount value for memebers." />
      <Container title="Discount" para="Set discount value for memebers." />
      <Container title="Access" para="Set discount value for memebers." />
      <Container title="App" para="Set discount value for memebers." />
    </div>
  );
};

export default Setting;
