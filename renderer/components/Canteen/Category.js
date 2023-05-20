import React from 'react';

const Category = ({ name }) => {
  return (
    <li className="mx-2 border-b-2 rounded text-sm flex justify-center border-b-[#1b1b1b] bg-[#1b1b1b] shadow-lg text-white py-2 px-4 cursor-pointer">
      {name}
    </li>
  );
};

export default Category;
