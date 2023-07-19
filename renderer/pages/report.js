import {
  getExpense,
  getGames,
  getItems,
  getSaleHistory,
} from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { currentDate } from '../util';
import {
  CanteenProfit,
  CaptainProfit,
  GameProfit,
} from '../components/Report/Profit';
import {
  CanteenAnaylsis,
  MembersAnaylsis,
  ProfitAnaylsis,
} from '../components/Report/Analysis';

const Home = () => {
  const userExpense = useSelector((curr) => curr.getExpense);
  const gameExpense = useSelector((curr) => curr.getGames);
  const items = useSelector((curr) => curr.getItems);

  const [saleAmount, setSaleAmount] = useState({});
  const [gameAmount, setGameAmount] = useState(0);
  const [expAmount, setExpAmount] = useState(0);

  const dispatch = useDispatch();

  const calculateInventory = () => {
    let amount = 0;
    items.forEach((element) => {
      amount += element.quantity * element.purchasePrice;
    });
    setInvAmount(amount);
  };

  return (
    <div className="w-full h-full p-5 flex flex-col justify-center items- ">
      <div className="w-full px-0 flex flex-wrap justify-center">
        <CaptainProfit />
        <GameProfit />
        <CanteenProfit />
      </div>
      <div className="w-full h-[400px]  flex flex-wrap justify-center ">
        <CanteenAnaylsis />
        <MembersAnaylsis />
        <ProfitAnaylsis />
      </div>
    </div>
  );
};

export default Home;
