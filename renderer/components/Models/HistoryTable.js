import React, { useEffect, useRef, useState } from 'react';
import shortUUID from 'short-uuid';

const HistoryTable = ({ history }) => {
  const [transaction, setTransaction] = useState([]);
  const ref = useRef(0);

  useEffect(() => {
    const transactions = () => {
      var transID = '0';
      let res = [];
      history.map((data, idx) => {
        if (transID !== data.transId) {
          transID = data.transId;
          let filter = history.filter((curr) => curr.transId === transID);
          res.push({
            trans: transID,
            transacArr: filter,
            paid: filter[0].paid,
            balance: filter[0].balance,
          });
        }
      });
      setTransaction(res);
    };
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
      <tbody className="">
        {transaction.length > 0 &&
          transaction.map((data) => {
            ref.current = 0;
            return (
              <>
                {data.transacArr.length > 0 &&
                  data.transacArr.map((trns, ID) => {
                    ref.current += trns.total;
                    return (
                      <tr key={shortUUID.generate()} className="">
                        <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                          {trns.type}
                        </td>
                        <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                          {trns.name}
                        </td>
                        <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                          {trns.price}
                        </td>
                        <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                          {trns.total}
                        </td>
                        <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"></td>
                        <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"></td>
                      </tr>
                    );
                  })}

                <tr className="bg-[#252525]">
                  <th
                    scope="col"
                    class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                  ></th>
                  <th
                    scope="col"
                    class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                  ></th>
                  <th
                    scope="col"
                    class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                  ></th>
                  <th
                    scope="col"
                    class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    {ref.current}
                  </th>

                  <th
                    scope="col"
                    class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                  >
                    {data.paid}
                  </th>
                  <th
                    scope="col"
                    class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                  >
                    {data.balance}
                  </th>
                </tr>
              </>
            );
          })}
      </tbody>
    </table>
  );
};

export default HistoryTable;
