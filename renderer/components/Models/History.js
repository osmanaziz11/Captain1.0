import React, { useEffect, useState } from 'react';
import HistoryTable from './HistoryTable';
import { useSelector } from 'react-redux';

const History = () => {
  const userHistory = useSelector((curr) => curr.getHistory);
  const [userData, setUserData] = useState([]);
  const [paidAmount, setPaidAmount] = useState(0);
  const [balanceAmount, setBalanceAmount] = useState(0);

  // User-defined
  const userTotal = (arr) => {
    var paid = 0;
    var blnc = 0;
    var id = 0;
    arr.forEach((item) => {
      if (item.transId !== id) {
        id = item.transId;
        paid += parseInt(item.paid);
        blnc += parseInt(item.balance);
      }
    });
    return { paid, blnc };
  };

  const generateHistory = () => {
    let currIdx = '0';
    const historyArr = [];
    userHistory.map((data, idx) => {
      if (data.date !== currIdx) {
        currIdx = data.date;
        const filter = userHistory.filter((curr) => curr.date === currIdx);
        const total = userTotal(filter);
        historyArr.push({
          date: data.date,
          history: filter,
          paidAmount: total.paid,
          balanceAmount: total.blnc,
        });
      }
    });
    setUserData(() => [...historyArr]);
  };

  const opts = {
    userData,
    paidAmount,
    balanceAmount,
    setPaidAmount,
    setBalanceAmount,
  };

  useEffect(() => {
    generateHistory();
    console.log(userHistory);
  }, [userHistory]);
  return (
    <>
      {userData.length > 0 &&
        userData.map((data, idx) => {
          return (
            <div className="flex w-full mb-3">
              <div className="w-full">
                <div className="flex items-center">
                  <div className="w-[12px] h-[12px] rounded-full border-zinc-800 border-2 bg-transparent mt-1"></div>
                  <p className="text-left text-sm text-white linear-gradient mx-3 mt-1">
                    {data.date}
                  </p>
                </div>
                <div className="my-3  border-l-2 border-l-zinc-700 mx-1 w-full ">
                  <HistoryTable history={data.history} />
                </div>

                <div className="flex items-center">
                  <div className="w-[12px] h-[12px] rounded-full border-zinc-800 border-2 bg-zinc-800 "></div>
                  <p className="text-left text-sm text-white linear-gradient mx-3 ">
                    Paid: {data.paidAmount} | Balance: {data.balanceAmount}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default History;
