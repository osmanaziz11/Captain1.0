import React from 'react';
import { useSelector } from 'react-redux';

const Search = ({ filter, applyFilters }) => {
  const items = useSelector((state) => state.getItems);

  const filterItems = (item, event) => {
    if (item.name.toLowerCase().startsWith(event.target.value.toLowerCase())) {
      if (filter === 'All') {
        return item;
      } else {
        return item.category === filter && item;
      }
    }
  };

  const handleSearchInput = (event) => {
    const filterArr = items.filter((item) => filterItems(item, event));
    applyFilters(filterArr);
  };
  return (
    <div className="relative w-full shadow-lg">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="voice-search"
        className="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-lg block w-full pl-10 p-2.5   placeholder-gray-400 "
        placeholder="Search food here"
        required
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default Search;
