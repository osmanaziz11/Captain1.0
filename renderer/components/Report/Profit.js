import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../redux/action';
import { useState, useEffect } from 'react';
import { currentDate, firstDayOfMonth, firstDayOfWeek } from '../../util';
import { Horizontal } from './Layouts';

export function CanteenProfit() {
  const rawData = useSelector((curr) => curr.getSaleHistory);
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getSaleHistory());
  }, []);

  useEffect(() => {
    calculate();
  }, [rawData]);

  const calculate = (value = 'today') => {
    const currDate = new Date(currentDate());
    let amount = 0;
    if (value === 'today') {
      rawData.map((row) => {
        const expDate = new Date(row.date);
        if (currDate.getTime() === expDate.getTime()) {
          amount += Math.abs(row.sold * row.purchasePrice - row.salePrice);
        }
      });
      setProfit(amount);
    } else if (value === 'weekly') {
      rawData.map((row) => {
        const expDate = new Date(row.date);
        if (
          expDate.getTime() >= firstDayOfWeek().getTime() &&
          expDate.getTime() <= currDate.getTime()
        ) {
          amount += Math.abs(row.sold * row.purchasePrice - row.salePrice);
        }
      });
      setProfit(amount);
    } else if (value === 'monthly') {
      rawData.map((row) => {
        const expDate = new Date(row.date);
        if (
          expDate.getTime() >= firstDayOfMonth().getTime() &&
          expDate.getTime() <= currDate.getTime()
        ) {
          amount += Math.abs(row.sold * row.purchasePrice - row.salePrice);
        }
      });
      setProfit(amount);
    }
  };

  const opts = {
    title: 'Canteens Profit',
    handleSelect: calculate,
    value: profit,
  };
  return <Horizontal {...opts} />;
}

export function GameProfit() {
  const rawData = useSelector((curr) => curr.getGames);
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getGames());
  }, []);

  useEffect(() => {
    calculate();
  }, [rawData]);

  const calculate = (value = 'today') => {
    const currDate = new Date(currentDate());
    let amount = 0;
    if (value === 'today') {
      rawData.map((row) => {
        const expDate = new Date(row.date);
        if (currDate.getTime() === expDate.getTime()) {
          amount += row.expense;
        }
      });
      setProfit(amount);
    } else if (value === 'weekly') {
      rawData.map((row) => {
        const expDate = new Date(row.date);
        if (
          expDate.getTime() >= firstDayOfWeek().getTime() &&
          expDate.getTime() <= currDate.getTime()
        ) {
          amount += row.expense;
        }
      });
      setProfit(amount);
    } else if (value === 'monthly') {
      rawData.map((row) => {
        const expDate = new Date(row.date);
        if (
          expDate.getTime() >= firstDayOfMonth().getTime() &&
          expDate.getTime() <= currDate.getTime()
        ) {
          amount += row.expense;
        }
      });
      setProfit(amount);
    }
  };
  const opts = {
    title: 'Games Profit',
    handleSelect: calculate,
    value: profit,
  };
  return <Horizontal {...opts} />;
}

export function CaptainProfit() {
  const opts = {
    title: 'Captains Profit',
    value: 0,
    handler: undefined,
  };
  return <Horizontal {...opts} />;
}
