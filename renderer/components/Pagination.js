import React from 'react';

const Pagination = ({ pages, currIndex, setPgeIndex }) => {
  return (
    <div class="flex items-center justify-between mt-6 w-full">
      <button
        className={`${
          currIndex === 0
            ? 'bg-[#1a1919e8] cursor-default opacity-50'
            : 'bg-[#1b1b1b] hover:bg-zinc-800'
        }  relative h-[40px] transition mx-2 border-2 rounded text-sm flex justify-center border-[#1b1b1b]  shadow-lg text-white py-2 px-4  items-center`}
        onClick={currIndex === 0 ? undefined : () => setPgeIndex(currIndex - 1)}
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
        {pages.map((page, idx) => {
          return (
            <button
              key={idx}
              className={`px-2 py-1 text-sm text-white rounded-md  ${
                currIndex + 1 == idx + 1 && 'bg-[#1b1b1b]'
              }`}
              onClick={() => setPgeIndex(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      <button
        className={`${
          currIndex + 1 === pages.length
            ? 'bg-[#1a1919e8] cursor-default opacity-50'
            : 'bg-[#1b1b1b] hover:bg-zinc-800'
        }  relative h-[40px] transition mx-2 border-2 rounded text-sm flex justify-center border-[#1b1b1b]  shadow-lg text-white py-2 px-4  items-center`}
        onClick={
          currIndex + 1 === pages.length
            ? undefined
            : () => setPgeIndex(currIndex + 1)
        }
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
