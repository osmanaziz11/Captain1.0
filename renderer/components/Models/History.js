import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import HistoryTable from './HistoryTable';
import shortUUID from 'short-uuid';

const History = () => {
  const userHistory = useSelector((curr) => curr.getHistory);
  const { balance } = useSelector((curr) => curr.getBalance);
  const [userData, setUserData] = useState([]);

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

  useEffect(() => {
    generateHistory();
  }, [userHistory]);

  // useEffect(() => {
  //   let totalBalance = 0;
  //   let paidAmount = 0;
  //   userData.forEach((data) => {
  //     totalBalance += data.balanceAmount;
  //     paidAmount += data.paidAmount;
  //   });
  //   dispatch(
  //     updateBalance({
  //       balance: totalBalance,
  //       phoneNumber: userHistory[0]?.phoneNumber,
  //     })
  //   );
  //   setRefCurrent({ totalBalance });
  // }, [userData]);

  return (
    <>
      <p
        className={`font-semibold text-lg  text-center  mb-1 ${
          balance > 0 ? 'text-red-600' : 'text-green-600'
        }`}
      >
        Total Balance: {balance}
      </p>
      {userData.length > 0 &&
        userData.map((data) => {
          return (
            <div key={shortUUID.generate()} className="flex w-full mb-3">
              <div className="w-full">
                <div className="flex items-center">
                  <div className="w-[12px] h-[12px] rounded-full border-zinc-800 border-2 bg-transparent mt-1"></div>
                  <p className="text-left text-sm text-white font-semibold mx-3 mt-1">
                    {data.date}
                  </p>
                </div>
                <div className="my-3  border-l-2 border-l-zinc-700 mx-1 w-full ">
                  <HistoryTable history={data.history} />
                </div>

                <div className="flex items-center">
                  <div className="w-[12px] h-[12px] rounded-full border-zinc-800 border-2 bg-zinc-800 "></div>
                  <p className="text-left text-sm text-red-600 font-semibold mx-3 ">
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
