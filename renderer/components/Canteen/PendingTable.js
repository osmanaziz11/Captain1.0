import { getHistory, updateBalance } from '../../redux/action';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Pagination from '../Pagination';
import shortUUID from 'short-uuid';
import Currency from '../Currency';
import { useEffect } from 'react';

const PendingTable = (props) => {
  const [pgeFilters, setPgeFilters] = useState([]);
  const [pgeIndex, setPgeIndex] = useState(0);
  const dispatch = useDispatch();

  const applyPagination = () => {
    const tempArr = [...props.users];
    const pages = Math.ceil(tempArr.length / 5);
    const pgeArr = [];
    for (var i = 0; i < pages; i++) {
      const end = tempArr.length > 5 ? 5 : tempArr.length;
      pgeArr.push(tempArr.slice(0, end));
      tempArr.splice(0, end);
    }
    return pgeArr;
  };

  const handlerView = (id, value) => {
    props.setHistoryPopup(true);
    dispatch(getHistory(id));
    dispatch(
      updateBalance({
        balance: value,
        phoneNumber: id,
      })
    );
  };
  const opts = {
    pages: pgeFilters,
    currIndex: pgeIndex,
    setPgeIndex: setPgeIndex,
  };
  useEffect(() => {
    const arr = applyPagination();

    setPgeFilters([...arr]);
  }, [props.users]);
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
                        Date
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
                              className="border-b border-b-[#272727] text-sm text-gray-300 font-normal"
                            >
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <div class="flex items-center gap-x-2 justify-start">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M7.725 2.146c-1.016.756-1.289 1.953-1.239 2.59c.064.779.222 1.793.222 1.793s-.313.17-.313.854c.109 1.717.683.976.801 1.729c.284 1.814.933 1.491.933 2.481c0 1.649-.68 2.42-2.803 3.334C3.196 15.845 1 17 1 19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-.914-2.801-1.684-2.801-3.334c0-.99.647-.667.932-2.481c.119-.753.692-.012.803-1.729c0-.684-.314-.854-.314-.854s.158-1.014.221-1.793c.065-.817-.398-2.561-2.3-3.096c-.333-.34-.558-.881.466-1.424c-2.24-.105-2.761 1.067-3.954 1.929z"
                                    />
                                  </svg>
                                  <div>
                                    <p className="text-sm text-gray-300">
                                      {item.name}
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td class="px-4 py-4  whitespace-nowrap text-center flex justify-center items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-5 h-5 text-gray-500 dark:text-gray-400 me-2"
                                  viewBox="0 0 15 15"
                                >
                                  <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <p className="text-sm text-gray-300">
                                  {item.cnic === ''
                                    ? 'xxxxx-xxxxxxx-x'
                                    : item.cnic}
                                </p>
                              </td>

                              <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                {item.balance > 0 ? (
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

                                    <h2 class="text-sm font-normal">
                                      Not Paid
                                    </h2>
                                  </div>
                                ) : (
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
                                )}
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.phoneNumber}
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                <p className="text-sm text-gray-300">
                                  {item.date}
                                </p>
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                <p className="text-sm text-gray-300">
                                  <Currency amount={item.paid} />
                                </p>
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                <p className="text-sm text-gray-300">
                                  <Currency amount={item.balance} />
                                </p>
                              </td>

                              <td class="px-4 py-4 text-sm whitespace-nowrap">
                                <div
                                  class="flex items-center gap-x-6 justify-center
                      "
                                >
                                  <button
                                    class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                                    onClick={() =>
                                      handlerView(
                                        item.phoneNumber,
                                        item.balance
                                      )
                                    }
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
      {props.users.length > 5 && <Pagination {...opts} />}
      {/* ==== End ====  */}
    </>
  );
};

export default PendingTable;
