import React from 'react';

const HistoryTable = () => {
  return (
    <table class="min-w-full  border-[#272727]h-full">
      <thead class="">
        <tr>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Game
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Price
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Canteen
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Price
          </th>

          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
          >
            Total
          </th>
          <th
            scope="col"
            class=" text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
          >
            Paid
          </th>
        </tr>
      </thead>
      <tbody class=" ">
        <tr className="">
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            Single
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            Fries
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            40,000
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            10,00
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            10,00
          </td>
        </tr>
        <tr className="">
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            Single
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            Fries
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            40,000
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            10,00
          </td>
          <td class=" text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
            10,00
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HistoryTable;
