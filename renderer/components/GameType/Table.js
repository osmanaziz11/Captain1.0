import OccupiedEffect from './OccupiedEffect';
import React from 'react';
import Type from './Type';
import FreeEffect from './FreeEffect';

const Table = () => {
  return (
    // ====== Table Container ======
    <div className="h-[260px] w-[500px]  rounded-2xl relative shadow-2xl shadow-black">
      <img
        src="/assets/table.jpg"
        className="w-full h-full rounded-2xl"
        alt=""
      />
      <div className="w-full h-full bg-transparent absolute top-0 opacity-0 hover:opacity-100 transition">
        <OccupiedEffect />
      </div>
    </div>
  );
};

export default Table;
