import React from 'react';
import Currency from '../Currency';
function Box({ title, date, amount, handler }) {
  return (
    <div
      className={`relative w-[49%]  h-[180px] text-gray-400 bg-[#1b1b1b] rounded-md  flex flex-col justify-between items-center shadow-lg cursor-pointer me-2 mb-3 py-3 px-10`}
    >
      <select
        name="filters"
        class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-center text-sm rounded-sm block w-full pl-10    placeholder-gray-400 "
        onChange={handler}
      >
        <option value="today">Today</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <div className="flex justify-center items-start w-full">
        {/* <p className="relative top-2">Rs</p> */}
        <h1 className="text-7xl font-bold">
          <Currency amount={amount} />
        </h1>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Box;
