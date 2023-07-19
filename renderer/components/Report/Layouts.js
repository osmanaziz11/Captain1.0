import Currency from '../Currency';
import React from 'react';

export function Horizontal(props) {
  return (
    <div
      className={`relative w-[32%]  h-[180px] text-gray-400 bg-[#1b1b1b] rounded-md  flex flex-col justify-between items-center shadow-lg cursor-pointer me-2 mb-3 py-3 px-10`}
    >
      <select
        name="filters"
        class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-center text-sm rounded-sm block  pl-    placeholder-gray-400 "
        onChange={(e) => props.handleSelect(e.target.value)}
      >
        <option value="today">Today</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <div className="flex justify-center items-start w-full">
        {/* <p className="relative top-2">Rs</p> */}
        <h1 className="text-4xl font-bold">
          <Currency amount={props.value} />
        </h1>
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export function Vertical(props) {
  return (
    <div className="h-full w-[32%]  rounded-lg shadow-md p-2 me-2">
      <h1 className="linear-gradient font-medium text-xl mb-2">
        Canteen Analysis
      </h1>
      <div className="  flex justify-between p-1 text-gray-400">
        <div className="w-[32%] h-[120px] bg-[#1b1b1b] rounded-lg shadow-md flex flex-col justify-center items-center">
          <h1 className="text-sm ">Inventory</h1>
          <h1 className="text-sm font-medium mt-4">Rs</h1>
          <h1 className="text-lg font-bold">400000</h1>
        </div>{' '}
        <div className="w-[32%] h-[120px] bg-[#1b1b1b] rounded-lg shadow-md flex flex-col justify-center items-center">
          <h1 className="text-sm ">Inventory</h1>
          <h1 className="text-sm font-medium mt-4">Rs</h1>
          <h1 className="text-lg font-bold">400000</h1>
        </div>{' '}
        <div className="w-[32%] h-[120px] bg-[#1b1b1b] rounded-lg shadow-md flex flex-col justify-center items-center">
          <h1 className="text-sm ">Inventory</h1>
          <h1 className="text-sm font-medium mt-4">Rs</h1>
          <h1 className="text-lg font-bold">400000</h1>
        </div>
      </div>
      <div className="  flex justify-between p-1 mt-3">
        <section className="w-full  mx-auto">
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden  bg-[#1b1b1b] md:rounded-t-lg">
                  <table className="min-w-full  border-[#272727]   shadow-lg">
                    <thead className="bg-[#252525]">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Most Purchased Items
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Most Unwanted Items
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#1b1b1b] ">
                      <tr className="border-b border-b-[#272727]">
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                          <div className="inline-flex items-center gap-x-3 justify-center">
                            Pepsi
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                          <div className="inline-flex items-center gap-x-3 justify-center">
                            Water
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-[#272727]">
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                          <div className="inline-flex items-center gap-x-3 justify-center">
                            Pepsi
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                          <div className="inline-flex items-center gap-x-3 justify-center">
                            Water
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-[#272727]">
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                          <div className="inline-flex items-center gap-x-3 justify-center">
                            Pepsi
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                          <div className="inline-flex items-center gap-x-3 justify-center">
                            Water
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
