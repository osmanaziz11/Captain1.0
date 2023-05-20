import React from 'react';

const Search = () => {
  return (
    <div class="relative w-full shadow-lg">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="voice-search"
        class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-lg block w-full pl-10 p-2.5   placeholder-gray-400 "
        placeholder="Search food here"
        required
      />
    </div>
  );
};

export default Search;
