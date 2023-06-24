import { useState } from 'react';
import History from './History';
import React from 'react';
import Pay from './Pay';

const MemberHistoryModel = (props) => {
  const [pay, setPay] = useState(false);

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center bg-[#0c0c0cd5] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  h-full"
    >
      {pay && <Pay handler={setPay} />}
      <div className="relative  w-[800px] max-h-full">
        <div className="relative bg-[#131212] rounded shadow-lg pb-4">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={() => props.setMemberHistory(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 pt-6 lg:px-8">
            <h1 className="text-white font-semibold text-2xl linear-gradient text-center mt-5 mb-1">
              Member History
            </h1>
          </div>
          <div className="h-96 w-full px-5 mt-2 py-5 overflow-x-hidden mb-3">
            <History />
          </div>
          <div>
            <p
              className="text-center text-green-700 font-medium cursor-pointer hover:text-green-600 transition"
              onClick={() => setPay(true)}
            >
              Let's Pay
            </p>
            <p className="text-center text-red-700 font-medium cursor-pointer hover:text-red-600 transition">
              Download
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberHistoryModel;
