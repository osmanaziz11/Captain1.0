import React from 'react';

const Pagination = () => {
  return (
    <div class="flex items-center justify-between mt-6">
      <button
        className={`hover:bg-zinc-800 relative h-[40px] transition mx-2 border-b-2 rounded text-sm flex justify-center border-b-[#1b1b1b] bg-[#1b1b1b] shadow-lg text-white py-2 px-4 cursor-pointer items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 rtl:-scale-x-100  me-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>

        <span>Previous</span>
      </button>

      <div class="items-center hidden md:flex gap-x-3">
        <a
          href="#"
          class="px-2 py-1 text-sm text-white rounded-md bg-[#1b1b1b] "
        >
          1
        </a>
        <a
          href="#"
          class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          2
        </a>
        <a
          href="#"
          class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          3
        </a>
        <a
          href="#"
          class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          ...
        </a>
        <a
          href="#"
          class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          12
        </a>
        <a
          href="#"
          class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          13
        </a>
        <a
          href="#"
          class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          14
        </a>
      </div>

      <button
        className={`hover:bg-zinc-800 relative h-[40px] transition mx-2 border-b-2 rounded text-sm flex justify-center border-b-[#1b1b1b] bg-[#1b1b1b] shadow-lg text-white py-2 px-4 cursor-pointer items-center`}
      >
        <span>Next</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 rtl:-scale-x-100 mt-1 ms-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
