import React from 'react';
import ThemeModel from './theme';

const EndGame = ({ handler }) => {
  return (
    <ThemeModel title="Table Bill" handler={handler}>
      <div className={`my-3 flex `}>
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

export default EndGame;
