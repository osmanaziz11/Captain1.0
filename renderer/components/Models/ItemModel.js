import React from 'react';
import ThemeModel from './theme';
import { useRef } from 'react';

const ItemModel = ({ handler }) => {
  const gallery = [1, 2, 3, 4];
  const thumbRef = useRef(null);
  function thumbnailSelect() {
    if (thumbRef.current) {
      const thumb = thumbRef.current;
      thumb.classList.add('border-2');
      thumb.classList.add('border-[#3AB54A]');
    }
  }
  return (
    <ThemeModel title="New Item Inventory" handler={handler}>
      <div className="w-full flex justify-between h-full">
        <form class="space-y-6 w-3/5" action="#">
          <div className="w-full">
            <h4 className="linear-gradient">Please fill item information</h4>
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
              placeholder="Item Name"
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
              placeholder="Item Name"
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
              placeholder="Item Name"
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
              placeholder="Item Name"
              required
            />
          </div>
        </form>
        {/* Item Gallery  */}
        <div className="w-[38%] space-y-6 h-[280px] overflow-hidden ">
          <div className="w-full">
            <h4 className="linear-gradient">Choose Item Thumbnail</h4>
          </div>
          <div className="w-full flex justify- item flex-wrap ">
            {/* selected item border-2 border-[#3AB54A] */}
            {gallery.length > 0 &&
              gallery.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-[65px] h-[68px]  mb-1 me-[2.9px] rounded-sm shadow-lg bg-[#1b1b1b] p-2 cursor-pointer"
                    onClick={thumbnailSelect}
                  >
                    <img
                      src="/assets/item.png"
                      className="w-full h-full object-contain  transition-all"
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {/* End  */}
      </div>
      <button
        type="submit"
        class="w-full text-white mt-5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#22722E]"
      >
        Add
      </button>
    </ThemeModel>
  );
};

export default ItemModel;
