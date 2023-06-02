import React from 'react';
import { AmountField } from './inputs';

const Pay = ({ handler }) => {
  return (
    <div
      className="absolute top-0 w-full h-full flex justify-center items-center bg-[#0c0c0cd5] z-40"
      onClick={() => handler(false)}
    >
      <div class="flex">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          class="flex-shrink-0 h-full z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-zinc-950"
          type="button"
        >
          Balance 1200{' '}
        </button>

        <div class="relative w-full h-full z-50">
          <AmountField />
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
    </div>
  );
};

export default Pay;
