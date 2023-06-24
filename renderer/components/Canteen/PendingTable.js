import React, { useState } from 'react';
import Pagination from '../Pagination';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHistory } from '../../redux/action';
import Empty from '../Empty';
import shortUUID from 'short-uuid';

const PendingTable = ({ data, setMemberHistory }) => {
  const [pgeFilters, setPgeFilters] = useState([]);
  const [pgeIndex, setPgeIndex] = useState(0);
  const dispatch = useDispatch();

  const applyPagination = () => {
    const tempArr = [...data];
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
  }, [data]);
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
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <button class="flex items-center gap-x-2 justify-center">
                            <span>Name</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        CNIC
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Phone
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Amount
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Balance
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Action
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
                              className="border-b border-b-[#272727]"
                            >
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <div class="flex items-center gap-x-2 justify-start">
                                  <img
                                    class="object-cover w-8 h-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt=""
                                  />
                                  <div>
                                    <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                      {item.name}
                                    </h2>
                                  </div>
                                </div>
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.cnic}
                              </td>

                              <td class="px-4 hidden py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div class="inline-flex w-full items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800 justify-center">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 3L4.5 8.5L2 6"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>

                                  <h2 class="text-sm font-normal">Paid</h2>
                                </div>
                              </td>
                              <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div class="inline-flex w-full items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-emerald-100/60 dark:bg-gray-800 justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                                    />
                                  </svg>

                                  <h2 class="text-sm font-normal">Not Paid</h2>
                                </div>
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.phoneNumber}
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                40,000
                              </td>
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                10,00
                              </td>
                              <td class="px-4 py-4 text-sm whitespace-nowrap">
                                <div
                                  class="flex items-center gap-x-6 justify-center
                      "
                                >
                                  <button
                                    class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                                    onClick={() => {
                                      setMemberHistory(true);
                                      dispatch(getHistory(item.phoneNumber));
                                    }}
                                  >
                                    View
                                  </button>

                                  <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                    Edit
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        );
                      })
                    ) : (
                      <tr>
                        <td className="px-2 py-3 text-gray-400 font-medium">
                          No members to show.
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
      {data.length > 5 && <Pagination {...opts} />}
      {/* ==== End ====  */}
    </>
  );
};

export default PendingTable;
