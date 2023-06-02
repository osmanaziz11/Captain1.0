import OccupiedEffect from './OccupiedEffect';
import FreeEffect from './FreeEffect';
import React, { useState } from 'react';

const Table = ({ name }) => {
  const [gameState, setGameState] = useState(false);
  return (
    // ====== Table Container ======
    <div className="h-[260px] w-[500px]  rounded-2xl relative shadow-2xl shadow-black flex justify-center">
      <img
        src="/assets/table.jpg"
        className="w-full h-full rounded-2xl"
        alt=""
      />
      <h1 className="absolute top-10 linear-gradient font-extrabold z-50 lett tracking-widest uppercase">
        {name}
      </h1>
      <div className="w-full h-full absolute top-0 ">
        {gameState ? <OccupiedEffect /> : <FreeEffect game={setGameState} />}
      </div>
    </div>
  );
};

export default Table;
