import DiscountSetting from '../components/Setting/DiscountSetting';
import ProfileSetting from '../components/Setting/ProfileSetting';
import AccessSetting from '../components/Setting/AccessSetting';
import TableSetting from '../components/Setting/TableSetting';
import GameSetting from '../components/Setting/GameSetting';
import AppSetting from '../components/Setting/AppSetting';
import React from 'react';

const Setting = () => {
  return (
    <div className="w-full  p-5 flex flex-wrap justify-center items-center">
      <TableSetting />
      <GameSetting />
      <ProfileSetting />
      <DiscountSetting />
      <AccessSetting />
      <AppSetting />
    </div>
  );
};

export default Setting;
