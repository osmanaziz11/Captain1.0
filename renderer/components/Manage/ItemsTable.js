import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';

const ItemsTable = ({ data }) => {
  const [pgeFilters, setPgeFilters] = useState([]);
  const [pgeIndex, setPgeIndex] = useState(0);

  const applyPagination = () => {
    const tempArr = [...data];
    const pages = Math.ceil(tempArr.length / 7);
    const pgeArr = [];
    for (var i = 0; i < pages; i++) {
      const end = tempArr.length > 7 ? 7 : tempArr.length;
      pgeArr.push(tempArr.slice(0, end));
      tempArr.splice(0, end);
    }
    return pgeArr;
  };

  const opts = {
    pages: pgeFilters,
    currIndex: pgeIndex,
    setPgeIndex: setPgeIndex,
  };
  useEffect(() => {
    const arr = applyPagination();
    setPgeFilters([...arr]);

    return () => {};
  }, []);

  return (
    <>
      <div class="relative overflow-x-auto shadow-md rounded  w-full">
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
            {pgeFilters.length > 0 ? (
              pgeFilters[pgeIndex].map((item, idx) => {
                return (
                  idx < 7 && (
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
                  )
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
      {/* ==== Pagination ==== */}
      {data.length > 7 && <Pagination {...opts} />}
      {/* ==== End ====  */}
    </>
  );
};

export default ItemsTable;
