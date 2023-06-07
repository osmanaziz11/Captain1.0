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
    console.log(`data`);
  }, [data]);

  return (
    <>
      <section class="w-full  mx-auto">
        <div class="flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden  bg-[#1b1b1b] md:rounded-t-lg">
                <table class="min-w-full  border-[#272727]   shadow-lg">
                  <thead class="bg-[#252525]">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <button class="flex items-center gap-x-2 justify-center">
                            Item name
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Quantity
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Category
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Purchase Price
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Sale Price
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Remaining
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Sold
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-[#1b1b1b] ">
                    {pgeFilters.length > 0 ? (
                      pgeFilters[pgeIndex].map((item, idx) => {
                        return (
                          idx < 7 && (
                            <tr className="border-b border-b-[#272727]">
                              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                                <div class="inline-flex items-center gap-x-3 justify-center">
                                  {item.name}
                                </div>
                              </td>

                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.quantity}
                              </td>
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.category}
                              </td>
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.purchasePrice}
                              </td>
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.salePrice}
                              </td>
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {Math.abs(item.quantity - item.sold)}
                              </td>
                              <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                                {item.sold}
                              </td>
                              <td class="px-4 py-4 text-sm whitespace-nowrap">
                                <div
                                  class="flex items-center gap-x-6 justify-center
                      "
                                >
                                  <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        );
                      })
                    ) : (
                      <p className="py-4 px-4 font-medium text-white">
                        No items available.
                      </p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Pagination ==== */}
      {data.length > 7 && <Pagination {...opts} />}
      {/* ==== End ====  */}
    </>
  );
};

export default ItemsTable;
