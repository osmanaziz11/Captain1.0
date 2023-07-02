import { ipcRenderer } from 'electron';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { currentDate } from '../../util';

const Pay = ({ handler }) => {
  const balance = useSelector((curr) => curr.getBalance);
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  ipcRenderer.once('payingHistoryUpdate', (event, data) => {
    data.status === 200 && handler(false);
  });

  const validateInput = (event) => {
    if (event.target.value === '' || event.target.value > balance.balance) {
      containerRef.current.classList.remove('bg-green-700');
      containerRef.current.classList.add('bg-red-700');
    } else {
      containerRef.current.classList.remove('bg-red-700');
      containerRef.current.classList.add('bg-green-700');
    }
  };

  const handleSubmit = () => {
    if (elementRef.current && containerRef.current) {
      if (
        elementRef.current.value !== '' &&
        elementRef.current.value <= balance.balance
      ) {
        ipcRenderer.send('updateRecord', {
          tableName: 'payingHistory',
          columns: {
            date: currentDate(),
            balance: balance.balance - elementRef.current.value,
            paid: parseInt(elementRef.current.value),
          },
          condition: 'phoneNumber',
          id: balance.phoneNumber,
        });
      }
    }
  };

  useEffect(() => {}, [balance]);

  return (
    <>
      <div
        className="absolute top-0 w-full h-full flex justify-center items-center bg-[#0c0c0cd5] z-40"
        onClick={() => handler(false)}
      ></div>
      <div class="absolute top-[50%] flex z-50 transition ">
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
              ref={elementRef}
              type="number"
              id="voice-search"
              class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 rounded-e-lg h-full text-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
              placeholder="Recevied Amount"
              onChange={validateInput}
              required
            />
          </div>
          <button
            ref={containerRef}
            type="submit"
            class="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-red-700 rounded-r-lg  flex justify-center items-center outline-none"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 4h10v14a2 2 0 0 1-2 2H9m3-5l3-3m0 0l-3-3m3 3H5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pay;
