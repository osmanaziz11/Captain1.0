import React, { useState } from 'react';

const PendingTable = (props) => {
  return (
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
                          <span>Id</span>
                        </button>
                      </div>
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
                      Customer
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
                      Remaining
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
                  <tr className="border-b border-b-[#272727]">
                    <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                      <div class="inline-flex items-center gap-x-3 justify-center">
                        <span>#3066</span>
                      </div>
                    </td>

                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
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
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <h2 class="text-sm font-normal">Paid</h2>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center gap-x-2 justify-center">
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div>
                          <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                            Arthur Melo
                          </h2>
                          <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                            authurmelo@example.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                      +923350591654
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
                        <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                          View
                        </button>

                        <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#272727]">
                    <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                      <div class="inline-flex items-center gap-x-3 justify-center">
                        <span>#3066</span>
                      </div>
                    </td>

                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex w-full items-center justify-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 3L3 9M3 3L9 9"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <h2 class="text-sm font-normal">Cancelled</h2>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center gap-x-2 justify-center">
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div>
                          <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                            Arthur Melo
                          </h2>
                          <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                            authurmelo@example.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                      +923350591654
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
                          onClick={() => props.setMemberHistory(true)}
                        >
                          View
                        </button>

                        <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#272727]">
                    <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                      <div class="inline-flex  items-center gap-x-3 justify-center">
                        <span>#3066</span>
                      </div>
                    </td>

                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex w-full items-center justify-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                            stroke="#667085"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <h2 class="text-sm font-normal">Refunded</h2>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center gap-x-2 justify-center">
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div>
                          <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                            Arthur Melo
                          </h2>
                          <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                            authurmelo@example.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                      +923350591654
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
                        <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                          View
                        </button>

                        <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingTable;
