import React from 'react';

const ItemsTable = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Item name
            </th>
            <th scope="col" class="px-6 py-3">
              Quantity
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Purchase Price
            </th>
            <th scope="col" class="px-6 py-3">
              Sale Price
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Remaining
            </th>
            <th scope="col" class="px-6 py-3">
              Sold
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Laptop</td>
            <td class="px-6 py-4">$2999</td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Accessories</td>
            <td class="px-6 py-4">$99</td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Google Pixel Phone
            </th>
            <td class="px-6 py-4">Gray</td>
            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Phone</td>
            <td class="px-6 py-4">$799</td>
          </tr>
          <tr>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Apple Watch 5
            </th>
            <td class="px-6 py-4">Red</td>
            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Wearables</td>
            <td class="px-6 py-4">$999</td>
            <td class="px-6 py-4">$999</td>
            <td class="px-6 py-4">$999</td>
            <td class="px-6 py-4">$999</td>
            <td class="px-6 py-4">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
