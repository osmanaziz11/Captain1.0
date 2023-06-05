import React from 'react';
import { useState } from 'react';
import DelCategory from '../Models/DelCategory';

const Category = ({ data, render }) => {
  const [del, setDel] = useState(false);
  const [categDel, setCategDel] = useState(false);
  return (
    <>
      {categDel && (
        <DelCategory handler={setCategDel} data={data} render={render} />
      )}
      <li
        className=" relative h-[40px] transition mx-2 border-b-2 rounded text-sm flex justify-center border-b-[#1b1b1b] bg-[#1b1b1b] shadow-lg text-white py-2 px-4 cursor-pointer"
        onMouseOver={() => setDel(true)}
        onMouseOut={() => setDel(false)}
      >
        {data.name}
        <span
          className={`absolute -top-0 -right-1 ${
            !del ? 'scale-0' : 'scale-100'
          } transition`}
          onClick={() => setCategDel(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4  text-red-600"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8l-1.4 1.4z"
            />
          </svg>
        </span>
      </li>
    </>
  );
};

export default Category;
