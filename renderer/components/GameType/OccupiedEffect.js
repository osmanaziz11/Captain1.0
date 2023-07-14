import React, { useEffect } from 'react';
import EndGame from '../Models/EndGame';
import { ipcRenderer } from 'electron';
import { useState } from 'react';

const OccupiedEffect = (props) => {
  console.log(props);
  const [gameData, setGameData] = useState({});
  const [model, setModel] = useState(false);
  const { id: tableId } = props;

  useEffect(() => {
    // let frame;

    // ipcRenderer.send('fetchRecord', {
    //   tableName: 'tables',
    //   condition: 'id',
    //   id: tableId,
    // });

    // ipcRenderer.once('fetchRecordtables', (event, response) => {
    //   if (response.status === 200) {
    //     frame = response.data[0].frame;
    //     ipcRenderer.send('fetchRecord', {
    //       tableName: 'games',
    //       condition: 'id',
    //       id: response.data[0].gameId,
    //     });
    //     ipcRenderer.once('fetchRecordgames', (event, resp) => {
    //       resp.status === 200 && setGameData({ ...resp.data[0], frame });
    //     });
    //   }
    // });

    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  const opts = {
    handler: setModel,
    ...props,
  };

  return (
    <>
      {model && <EndGame {...opts} />}
      <div className="absolute w-full h-full hover:bg-[#000000f1] rounded-2xl  top-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all   text-white">
        <p className="mt-10 mb-3">{props.type}</p>
        <div className=" flex flex-col justify-center items-center ">
          <p>{props.frame}</p>
        </div>
        <p className="my-4">10:00</p>
        <div className="">
          <h1
            className="hover:text-red-700 transition-all cursor-pointer font-extrabold"
            onClick={() => setModel(true)}
          >
            END GAME
          </h1>
        </div>
      </div>
    </>
  );
};

export default OccupiedEffect;
