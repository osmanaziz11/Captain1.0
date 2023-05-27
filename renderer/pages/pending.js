import React from 'react';
import ItemsTable from '../components/Manage/ItemsTable';
import Search from '../components/Canteen/Search';
import PendingTable from '../components/Canteen/PendingTable';

const Pending = () => {
  return (
    <div className="canteen p-10 w-full h-full overflow-scroll">
      {/* ==== Filters & Search ===== */}
      <div className="w-full h-[50px] flex">
        <div className=" w-1/4">
          {' '}
          <Search />
        </div>
        <div className="w-3/4 flex justify-end">
          <div class=" relative w-40 shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[42px] cursor-pointer ">
            <p className="text-gray-400 text-2xl font-bold me-3 pb-1"> +</p>
            <p className="text-gray-400 "> Add Member</p>
          </div>
        </div>
      </div>
      {/* ==== End ===== */}

      {/* ==== Canteen items Detail Window ===== */}
      <div className="w-full px-0 flex flex-wrap mt-5">
        <PendingTable />
      </div>
      {/* ==== End ===== */}
    </div>
  );
};

export default Pending;
