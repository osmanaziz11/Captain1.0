import React from 'react';

function Container({ title, para }) {
  return (
    <div className="w-[30%] mx-3 h-[270px] mt-2 rounded  bg-[#1b1b1b]  shadow mb-3">
      <div className="w-full  rounded-t shadow bg-[#252525] flex flex-col p-2 mb-2">
        <h1 className=" text-gray-300 font-medium">{title} Setting</h1>
        <p className="text-gray-300 text-xs">{para}</p>
      </div>
      <div className="px-2 py-2">
        <div className="w-full flex justify-between mb-2">
          <input
            type="text"
            name=""
            id=""
            value=""
            placeholder="Victory"
            className="border-0 bg-transparent placeholder:text-gray-400 text-gray-300 font-medium "
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5  transition  cursor-pointer text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
              />
              <path
                fill="currentColor"
                d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
              />
            </svg>
          </span>
        </div>
        <div className="w-full flex justify-between mb-2">
          <input
            type="text"
            name=""
            id=""
            value=""
            placeholder="Parliment"
            className="border-0 bg-transparent placeholder:text-gray-400 text-gray-300 font-medium"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5  transition  cursor-pointer text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
              />
              <path
                fill="currentColor"
                d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
              />
            </svg>
          </span>
        </div>
        <div className="w-full flex justify-between mb-2">
          <input
            type="text"
            name=""
            id=""
            value=""
            placeholder="Table 1"
            className="border-0 bg-transparent placeholder:text-gray-400 text-gray-300 font-medium"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5  transition  cursor-pointer text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
              />
              <path
                fill="currentColor"
                d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
              />
            </svg>
          </span>
        </div>
        <div className="w-full flex justify-between mb-1">
          <input
            type="text"
            name=""
            id=""
            value=""
            placeholder="Table 1"
            className="border-0 bg-transparent placeholder:text-gray-400 text-gray-300 font-medium"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5  transition  cursor-pointer text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
              />
              <path
                fill="currentColor"
                d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
              />
            </svg>
          </span>
        </div>
        <div className="w-full flex justify-center items-end mt-5">
          <button className="px-3 py-2 text-xs text-gray-300 font-medium bg-[#161515] opacity-70 cursor-context-menu rounded shadow">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;
