import React from 'react';

const ThemeModel = ({ title, children, handler }) => {
  return (
    <div class="fixed top-0 left-0 right-0 z-50 flex justify-center items-center bg-[#0c0c0cd5] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  h-full">
      <div class="relative w-[600px] max-h-full">
        <div class="relative bg-[#131212] rounded shadow-lg">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={() => handler(false)}
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8  h-full">
            <h1 className="text-white font-semibold text-2xl linear-gradient text-center my-5">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeModel;
