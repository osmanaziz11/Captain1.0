import React from 'react';

const Empty = () => {
  return (
    <div className="w-100 h-100 flex justify-center items-center flex-col  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 text-gray-500 dark:text-gray-400"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 20a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10v-2Zm0-16a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10v2Zm-8 8a7.97 7.97 0 0 1 2.343-5.657L4.93 4.93A9.972 9.972 0 0 0 2 11.999h2Zm2.343-5.657A7.972 7.972 0 0 1 12 4V2a9.972 9.972 0 0 0-7.071 2.929l1.414 1.414Zm-1.414 0l12.728 12.728l1.414-1.414L6.343 4.929L4.93 6.343ZM20 12a7.97 7.97 0 0 1-2.343 5.657l1.414 1.414A9.972 9.972 0 0 0 22 12h-2Zm-2.343 5.657A7.972 7.972 0 0 1 12 20v2a9.972 9.972 0 0 0 7.071-2.929l-1.414-1.414Z"
        />
      </svg>
      <h1 className="font-medium text-lg mt-2 text-gray-500 dark:text-gray-400">
        No items to show
      </h1>
    </div>
  );
};

export default Empty;
