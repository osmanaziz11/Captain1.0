import React, { useState } from 'react';
import ItemModel from '../Models/ItemModel';

const ItemsTable = ({ data, setRender }) => {
  const [item, setItem] = useState(false);
  return (
    <>
      {item && (
        <ItemModel
          handler={setItem}
          render={setRender}
          opts="1"
          data={data[0]}
        />
      )}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg  w-full">
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
            {data.length > 0 ? (
              data.map((item, idx) => {
                return (
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {item.name}
                    </th>
                    <td class="px-6 py-4">{item.quantity}</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {item.category}
                    </td>
                    <td class="px-6 py-4">{item.purchasePrice}</td>
                    <td class="px-6 py-4">{item.salePrice}</td>
                    <td class="px-6 py-4">
                      {Math.abs(item.quantity - item.sold)}
                    </td>
                    <td class="px-6 py-4">{item.sold}</td>
                    <td
                      class="px-6 py-4 cursor-pointer text-red-600 font-medium"
                      onClick={() => setItem(true)}
                    >
                      Edit
                    </td>
                  </tr>
                );
              })
            ) : (
              <p className="py-4 px-4 font-medium text-base">
                You don't have any inventory
              </p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemsTable;
