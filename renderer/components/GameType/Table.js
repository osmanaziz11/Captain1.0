import OccupiedEffect from './OccupiedEffect';
import FreeEffect from './FreeEffect';
import React, { useEffect, useState } from 'react';

const Table = (props) => {
  console.log(props);
  const [gameState, setGameState] = useState(props.status);

  const opts = {
    ...props,
    setGameState,
  };

  return (
    // ====== Table Container ======
    <div className="h-[260px] w-[500px]  rounded-2xl relative shadow-2xl shadow-black flex justify-center">
      <img
        src="/assets/table.jpg"
        className="w-full h-full rounded-2xl"
        alt=""
      />
      <h1 className="absolute top-10 linear-gradient font-extrabold z-40 lett tracking-widest uppercase">
        {props.name}
      </h1>
      <div className="w-full h-full absolute top-0 ">
        {gameState ? <OccupiedEffect {...opts} /> : <FreeEffect {...opts} />}
      </div>
    </div>
  );
};

export default Table;
