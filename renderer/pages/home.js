import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Box from '../components/Home/Box';
import { getExpense, getItems } from '../redux/action';
import { currentDate } from '../util';

const Home = () => {
  const userExpense = useSelector((curr) => curr.getExpense);
  const saleHistory = useSelector((curr) => curr.saleHistory);
  const items = useSelector((curr) => curr.getItems);
  const [saleAmount, setSaleAmount] = useState({});
  const [expAmount, setExpAmount] = useState(0);
  const [invAmount, setInvAmount] = useState(0);
  const dispatch = useDispatch();

  const calculateInventory = () => {
    let amount = 0;
    items.forEach((element) => {
      amount += element.quantity * element.purchasePrice;
    });
    setInvAmount(amount);
  };

  const calculateSaleAndProfit = () => {
    let profit = 0;
    let amount = 0;
    items.forEach((element) => {
      amount += element.sold * element.salePrice;
      profit +=
        Math.abs(element.purchasePrice - element.salePrice) * element.sold;
    });
    setSaleAmount({ amount, profit });
  };

  const firstDayOfWeek = () => {
    const currDate = new Date(currentDate());
    const dayOfWeek = currDate.getDay();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const firstDayOfWeek = new Date(
      currDate.getTime() - daysToSubtract * 24 * 60 * 60 * 1000
    );
    return firstDayOfWeek;
  };

  const firstDayOfMonth = () => {
    const currDate = new Date(currentDate());
    const month = currDate.getMonth();
    const year = currDate.getFullYear();
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = prevMonth === 11 ? year - 1 : year;
    const previousMonthDate = new Date(prevYear, prevMonth, currDate.getDate());
    return previousMonthDate;
  };

  const handleSelect = (value) => {
    const currDate = new Date(currentDate());
    let amount = 0;
    if (value === 'today') {
      userExpense.map((exp) => {
        const expDate = new Date(exp.date);

        if (currDate.getTime() === expDate.getTime()) {
          amount += exp.amount;
        }
      });
      setExpAmount(amount);
    } else if (value === 'weekly') {
      userExpense.map((exp) => {
        const expDate = new Date(exp.date);
        if (
          expDate.getTime() >= firstDayOfWeek().getTime() &&
          expDate.getTime() <= currDate.getTime()
        ) {
          amount += exp.amount;
        }
      });
      setExpAmount(amount);
    } else if (value === 'monthly') {
      userExpense.map((exp) => {
        const expDate = new Date(exp.date);
        if (
          expDate.getTime() >= firstDayOfMonth().getTime() &&
          expDate.getTime() <= currDate.getTime()
        ) {
          amount += exp.amount;
        }
      });
      setExpAmount(amount);
    }
  };

  const handleSale=(value)=>{
    if(value==='today')
    {
      const currDate = new Date(currentDate());
      let amount = 0;

    }else if(value==='weekly')
    {

    }else if(value==='monthly')
    {

    }

  }

  useEffect(() => {
    dispatch(getExpense());
    dispatch(getItems());
  }, []);

  useEffect(() => {
    handleSelect('today');
    calculateSaleAndProfit();
    calculateInventory();
  }, [userExpense, items]);

  return (
    <div className="w-full h-full p-5 flex justify-center items-center">
      <div className="w-full px-0 flex flex-wrap ">
        <Box
          title="Captain's Profit"
          date="23 May 2023"
          amount={saleAmount.profit}
        />
        <Box title="Total Sale" date="23 May 2023" amount={saleAmount.amount} handler={handleSale} />
        <Box title="Total Inventory" amount={invAmount} handler={undefined} />
        <Box
          title="Total Expense"
          amount={expAmount}
          handler={(e) => handleSelect(e.target.value)}
        />
        <Box title="Game Played" date="23 May 2023" amount={0} />
        <Box title="Total Expense" date="23 May 2023" amount={0} />
      </div>
    </div>
  );
};

export default Home;
