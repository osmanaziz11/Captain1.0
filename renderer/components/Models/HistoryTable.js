import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const HistoryTable = ({ history }) => {
  const [transaction, setTransaction] = useState([]);
  const transactions = () => {
    var transID = '0';
    let res = [];
    history.map((data, idx) => {
      if (transID === data.transId) {
        transID = data.transId;
        let filter = history.filter((curr) => curr.transId === transID);
        res.push({
          trans: transID,
          transacArr: filter,
        });
      }
    });
    console.log(res);
  };

  useEffect(() => {
    transactions();
  }, []);

  return (
    <table class="min-w-full  border-[#272727]h-full">
      <thead class="bg-[#252525]">
        <tr>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Type
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Name
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Qty
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Price
          </th>

          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Total
          </th>

          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
          >
            Paid
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
          >
            Balance
          </th>
        </tr>
      </thead>
      <tbody class=" ">
        {history.map((data, idx) => {
          return (
            <>
              <tr className="">
                <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                  {data.type}
                </td>
                <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                  {data.name}
                </td>
                <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                  {data.price}
                </td>
                <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                  {data.total}
                </td>
                <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"></td>
                <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"></td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default HistoryTable;
