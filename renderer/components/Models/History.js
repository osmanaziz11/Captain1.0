import React from 'react';
import HistoryTable from './HistoryTable';

const History = () => {
  return (
    <div className="flex w-full mb-3">
      <div className="w-full">
        <div className="flex items-center">
          <div className="w-[12px] h-[12px] rounded-full border-zinc-800 border-2 bg-transparent mt-1"></div>
          <p className="text-left text-sm text-white linear-gradient mx-3 mt-1">
            12 May 2023
          </p>
        </div>
        <div className="my-3 pb-1 border-l-2 border-l-zinc-700 mx-1 w-full ">
          <HistoryTable />
        </div>

        <div className="flex items-center">
          <div className="w-[12px] h-[12px] rounded-full border-zinc-800 border-2 bg-zinc-800 "></div>
          <p className="text-left text-sm text-white linear-gradient mx-3 ">
            Paid: 120 | Balance: 200
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
