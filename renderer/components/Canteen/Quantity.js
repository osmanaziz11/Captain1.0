import React from 'react';

const Quantity = () => {
  return (
    <div>
      <div class="flex items-center shadow-xl bg-zinc-900 px-2 rounded">
        <button
          type="button"
          class=" text-gray-600 transition hover:opacity-75 dark:text-gray-300"
        >
          &minus;
        </button>

        <input
          type="number"
          id="Quantity"
          value="1"
          class="w-10 border-transparent text-center [-moz-appearance:_textfield]  bg-transparent text-white sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          class=" text-gray-600 transition hover:opacity-75 dark:text-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
