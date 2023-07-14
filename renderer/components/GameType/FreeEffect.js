import React, { useEffect, useState } from 'react';
import StartTemplate from './StartTemplate';
import Option from '../GameType/Option';
import { ipcRenderer } from 'electron';

const FreeEffect = (props) => {
  const { id, setGameState } = props;
  const [gameStart, setGameStart] = useState({});
  const [types, setTypes] = useState([]);
  const [game, setGame] = useState({});

  const optn = ['6 Ball', '8 Ball', '12 Ball', 'Full Frame'];
  const images = ['game1.jpg', 'game2.png', 'game3.png', 'game1.jpg'];

  useEffect(() => {
    ipcRenderer.send('getAll', 'games');
    ipcRenderer.once('get_games', (event, data) => {
      setTypes(data);
    });

    return () => {};
  }, []);

  const handleGame = (obj) => {
    if (obj.type === 'Century' || obj.type === 'Points') {
    } else {
      setGame(obj);
    }
  };

  const handleOption = (obj) => {
    if (obj.type === 'Century' || obj.type === 'Points') {
    } else {
      setGameStart(obj);
    }
  };

  return (
    <div className="absolute w-full h-full bg-[#1514149E]  top-0  z-40 hover:z-0 rounded-lg  transition">
      <div className="w-full h-full  flex flex-col justify-center items-center bg-[#000000d3] opacity-0 hover:opacity-100 transition rounded-lg">
        {!Object.keys(gameStart).length > 0 ? (
          <div className="w-full flex justify-center items-center ">
            {Object.keys(game).length === 0
              ? types.length > 0 &&
                types.map((type, idx) => {
                  type['img'] = images[idx];
                  return (
                    <Option
                      key={type.type}
                      game={type}
                      setGameState={handleGame}
                    />
                  );
                })
              : optn.map((type, idx) => {
                  return (
                    <Option
                      key={type.type}
                      game={{ type, game: { ...game }, img: images[idx] }}
                      setGameState={handleOption}
                    />
                  );
                })}
          </div>
        ) : (
          <StartTemplate id={id} setGameState={setGameState} data={gameStart} />
        )}
        {/* {Object.keys(game).length !== 0 && (
          <div className="w-full flex justify-center items-center mt-3">
            <button
              className="px-3 py-1 bg-red-600 font-medium rounded text-white"
              onClick={() => setGame({})}
            >
              Back
            </button>
          </div>
        )} */}
      </div>

      {/* ===== Game Type Option =====  */}

      {/* ===== End =====  */}
    </div>
  );
};

export default FreeEffect;
