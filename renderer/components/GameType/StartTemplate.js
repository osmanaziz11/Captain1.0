import { ipcRenderer } from 'electron';
import React from 'react';

function StartTemplate({ id, setGameState, data }) {
  const { type, game } = data;

  const startGame = () => {
    ipcRenderer.send('updateRecord', {
      tableName: 'tables',
      columns: { status: 1, gameId: game.id, frame: type },
      condition: 'id',
      id: id,
    });

    setGameState(1);
  };
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-[300px] my-5">
        <h1 className="linear-gradient font-extrabold tracking-widest uppercase bg-green-500 text-xl flex justify-">
          {game.type}
        </h1>
        <h1 className="linear-gradient font-extrabold tracking-widest uppercase bg-green-500 text-xl flex justify-">
          {type}
        </h1>
        <h1 className="linear-gradient font-extrabold tracking-widest uppercase bg-green-500 text-xl flex justify-">
          {' '}
          Rs {game.price}
        </h1>
      </div>
      <button
        className="px-3 py-1 bg-green-600 rounded font-medium text-white"
        onClick={startGame}
      >
        Lets Play
      </button>
    </>
  );
}

export default StartTemplate;
