import React from 'react';
import ThemeModel from './theme';
import { useDispatch } from 'react-redux';
import { closeCart } from '../../redux/action';
import { useState } from 'react';

const Cart = ({ handler }) => {
  const [walk, setWalk] = useState(false);
  const [table, setTable] = useState(false);
  return (
    <ThemeModel title="Canteen Bill" handler={handler}>
      <table class="min-w-full  border-[#272727]   shadow-lg">
        {/* ==== Items ==== */}
        <thead class="bg-[#252525]  ">
          <tr>
            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Item Name
            </th>

            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Quantity
            </th>

            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody class="bg-[#1b1b1b]  overflow-hidden">
          <tr className="border-b border-b-[#272727]">
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              Lays
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              2
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              30
            </td>
          </tr>
          <tr className="border-b border-b-[#272727]">
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              Lays
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              2
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              30
            </td>
          </tr>
          <tr className="border-b border-b-[#272727]">
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              Lays
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              2
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              30
            </td>
          </tr>
          <tr className="border-b border-b-[#272727]">
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              Lays
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              2
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              30
            </td>
          </tr>
          <tr className="border-b border-b-[#272727]">
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              Lays
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              2
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              30
            </td>
          </tr>
        </tbody>
        {/* End  */}

        {/* ==== Total ==== */}
        <thead class="bg-red-700">
          <tr>
            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Total
            </th>

            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Discount
            </th>

            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Sub Total
            </th>
          </tr>
        </thead>
        <tbody class="bg-[#1b1b1b] ">
          <tr className="border-b border-b-[#272727]">
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              Lays
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              2
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              30
            </td>
          </tr>
        </tbody>
        {/* End  */}
      </table>
      {/* ==== Walk In ==== */}
      <div className={`my-3 flex ${!walk ? 'hidden' : ''} `}>
        <div class="relative w-full  pe-2">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
            placeholder="Customer name"
            required
          />
        </div>
        <div class="relative w-full  pe-2">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
            placeholder="Recevived Amount"
            required
          />
        </div>
      </div>
      {/* End  */}

      {/* ==== Table ==== */}
      <div className={`my-3  ${!table ? 'hidden' : ''} `}>
        <div class="relative w-full  pe-2 mb-2">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
            placeholder="Table"
            required
          />
        </div>
        <div className="w-full flex">
          <div class="relative w-full  pe-2 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
              placeholder="Player 1"
              required
            />
          </div>
          <div class="relative w-full  pe-2 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              disabled
              class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
              placeholder="Received Amount"
              required
            />
          </div>
        </div>
      </div>
      {/* End  */}

      {/* ==== Radio Options ====  */}
      <div
        className={`flex ${
          table || walk ? 'hidden' : ''
        } w-full justify-center items-center my-2`}
      >
        <div class="flex  items-center mr-4">
          <input
            id="inline-radio"
            type="radio"
            value=""
            name="inline-radio-group"
            class="w-4 h-4  outline-none border-0"
            onClick={() => setWalk(true)}
          />
          <label
            for="inline-radio"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Walk in
          </label>
        </div>
        <div class="flex  items-center mr-4">
          <input
            id="inline-2-radio"
            type="radio"
            value=""
            name="inline-radio-group"
            onClick={() => setTable(true)}
            class="w-4 h-4  outline-none text-purple-600 bg-zinc-900  dark:bg-zinc-900 dark:border-zinc-900"
          />
          <label
            for="inline-2-radio"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Table
          </label>
        </div>
      </div>
      {/* End  */}
      <p
        className={`text-red-600 text-center cursor-pointer ${
          table || walk ? '' : 'hidden'
        }  font-medium`}
        onClick={() => {
          setTable(false);
          setWalk(false);
        }}
      >
        Back
      </p>
      <div className="w-full my-3 flex justify-center items-center">
        <button
          type="submit"
          onClick={undefined}
          class="w-full text-white    outline-none  font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
        >
          Let's Pay
        </button>
      </div>
    </ThemeModel>
  );
};

export default Cart;
