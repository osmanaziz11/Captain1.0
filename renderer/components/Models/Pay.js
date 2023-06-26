import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Pay = ({ handler }) => {
  const balance = useSelector((curr) => curr.getBalance);

  useEffect(() => {
    console.log(balance);
  }, [balance]);

  return (
    <>
      <div
        className="absolute top-0 w-full h-full flex justify-center items-center bg-[#0c0c0cd5] z-40"
        onClick={() => handler(false)}
      ></div>
      <div class="absolute top-[50%] flex z-50">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          class="flex-shrink-0 h-full z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-zinc-950"
          type="button"
        >
          Balance {balance.balance}
        </button>

        <div class="relative w-full h-full z-50">
          <div class="relative w-full shadow-lg h-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 6h18v12H3V6m9 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M7 8a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2H7Z"
                />
              </svg>
            </div>
            <input
              type="number"
              id="voice-search"
              class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 rounded-e-lg h-full text-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
              placeholder="Recevied Amount"
              required
            />
          </div>
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pay;
