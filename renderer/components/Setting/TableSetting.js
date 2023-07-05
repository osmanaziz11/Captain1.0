import React, { useEffect, useState } from 'react';
import CustomField from './CustomField';
import { ipcRenderer } from 'electron';
import Container from './Container';

function TableSetting() {
  const [data, setData] = useState([]);
  const [EditBtn, setEditBtn] = useState(true);

  const handleSubmit = () => {
    const inputs = document.querySelectorAll('#inputContainer input');
    inputs.forEach((input) => {
      if (input.value !== '') {
        ipcRenderer.send('updateRecord', {
          tableName: 'tables',
          columns: { name: input.value },
          condition: 'id',
          id: input.getAttribute('data-id'),
        });
      }
    });
  };

  useEffect(() => {
    ipcRenderer.once('get_tables', (event, data) => {
      setData(data);
    });
    ipcRenderer.send('getAll', 'tables');
  }, []);

  return (
    <Container title="Tables" para="Set your snooker tables name.">
      <div className="px-2 py-2">
        {data.length > 0 &&
          data.map((field) => {
            const opts = {
              placeholder: 'Enter table name',
              value: field.name,
              id: field.id,
              type: 'text',
              handler: setEditBtn,
            };
            return (
              <div id="inputContainer">
                <CustomField key={field.id} {...opts} />
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

export default TableSetting;
