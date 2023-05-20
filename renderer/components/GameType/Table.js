import OccupiedEffect from './OccupiedEffect';
import React from 'react';
import Type from './Type';
import FreeEffect from './FreeEffect';

const Table = () => {
  return (
    // ====== Table Container ======
    <div className="h-[260px] w-[500px]  rounded-2xl relative shadow-2xl shadow-black flex justify-center">
      <img
        src="/assets/table.jpg"
        className="w-full h-full rounded-2xl"
        alt=""
      />
      <h1 className="absolute top-10 linear-gradient font-extrabold z-50 lett tracking-widest uppercase">
        Table no 1
      </h1>
      <div className="w-full h-full bg-transparent absolute top-0 opacity-0 hover:opacity-100 transition">
        <OccupiedEffect />
      </div>
    </div>
  );
};

export default Table;
