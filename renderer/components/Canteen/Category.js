import React from 'react';

const Category = ({ data }) => {
  return (
    <li className="hover:bg-[#e92929] transition mx-2 border-b-2 rounded text-sm flex justify-center border-b-[#1b1b1b] bg-[#1b1b1b] shadow-lg text-white py-2 px-4 cursor-pointer">
      {data.name}
    </li>
  );
};

export default Category;
