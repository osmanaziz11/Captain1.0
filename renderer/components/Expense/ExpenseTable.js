import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Pagination from '../Pagination';
import shortUUID from 'short-uuid';
import Currency from '../Currency';
import { useEffect } from 'react';

const ExpenseTable = () => {
  const expenseData = useSelector((curr) => curr.getExpense);
  const [pgeFilters, setPgeFilters] = useState([]);
  const [pgeIndex, setPgeIndex] = useState(0);

  const applyPagination = () => {
    const tempArr = [...expenseData];
    const pages = Math.ceil(tempArr.length / 5);
    const pgeArr = [];
    for (var i = 0; i < pages; i++) {
      const end = tempArr.length > 5 ? 5 : tempArr.length;
      pgeArr.push(tempArr.slice(0, end));
      tempArr.splice(0, end);
    }
    return pgeArr;
  };

  const opts = {
    pages: pgeFilters,
    currIndex: pgeIndex,
    setPgeIndex: setPgeIndex,
  };

  useEffect(() => {
    const arr = applyPagination();
    setPgeFilters([...arr]);
  }, [expenseData]);

  return (
    <>
      <section class="w-full  mx-auto">
        <div class="flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden  bg-[#1b1b1b] md:rounded-t-lg">
                <table class="min-w-full  border-[#272727]   shadow-lg">
                  <thead class="bg-[#252525]">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Expense Type
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-[#1b1b1b] ">
                    {pgeFilters.length > 0 ? (
                      pgeFilters[pgeIndex].map((item, idx) => {
                        return (
                          idx < 7 && (
                            <tr
                              key={shortUUID.generate()}
                              className="border-b border-b-[#272727] text-sm text-gray-300 font-normal"
                            >
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                <p className="text-sm text-gray-300">
                                  {item.date}
                                </p>
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                <p className="text-sm text-gray-300">
                                  {item.type}
                                </p>
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                <p className="text-sm text-gray-300">
                                  <Currency amount={item.amount} />
                                </p>
                              </td>
                            </tr>
                          )
                        );
                      })
                    ) : (
                      <tr>
                        <td className="px-2 py-3 text-gray-400 font-medium">
                          No expense to show.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Pagination ==== */}
      {expenseData.length > 5 && <Pagination {...opts} />}
      {/* ==== End ====  */}
    </>
  );
};

export default ExpenseTable;
