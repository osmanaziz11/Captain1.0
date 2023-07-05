import React, { useEffect, useState } from 'react';
import CustomField from './CustomField';
import { ipcRenderer } from 'electron';
import Container from './Container';

function GameSetting() {
  const [data, setData] = useState([]);
  const [EditBtn, setEditBtn] = useState(true);

  const handleSubmit = () => {
    const inputs = document.querySelectorAll('#inputContainer input');
    inputs.forEach((input) => {
      if (input.value !== '') {
        ipcRenderer.send('updateRecord', {
          tableName: 'games',
          columns: { price: input.value },
          condition: 'id',
          id: input.getAttribute('data-id'),
        });
      }
    });
  };

  useEffect(() => {
    ipcRenderer.once('get_games', (event, data) => {
      setData(data);
    });
    ipcRenderer.send('getAll', 'games');
  }, []);

  return (
    <Container title="Game" para="Set your game rates.">
      <div className="px-2 py-2">
        {data.length > 0 &&
          data.map((field) => {
            const opts = {
              placeholder: 'Rs 0.0',
              value: field.price,
              id: field.id,
              type: 'number',
              handler: setEditBtn,
            };
            return (
              <div id="inputContainer" className="flex">
                <span className="text-gray-300 font-medium w-[40%]">
                  {field.type}
                </span>
                <div className="w-[60%] ">
                  <CustomField key={field.id} {...opts} />
                </div>
              </div>
            );
          })}

        <div className="w-full flex justify-center items-end mt-5">
          <button
            className={`px-3 py-2 text-xs text-gray-300 font-medium bg-[#161515] ${
              EditBtn ? 'opacity-70 cursor-context-menu' : 'opacity-100'
            }  rounded shadow`}
            disabled={EditBtn}
            onClick={handleSubmit}
          >
            Save changes
          </button>
        </div>
      </div>
    </Container>
  );
}

export default GameSetting;
