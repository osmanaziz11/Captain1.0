import React, { useEffect, useState } from 'react';
import CustomField from './CustomField';
import { ipcRenderer } from 'electron';
import Container from './Container';

function DiscountSetting() {
  const [data, setData] = useState([]);
  const [EditBtn, setEditBtn] = useState(true);

  const handleSubmit = () => {
    const cols = {};
    const inputs = document.querySelectorAll('#dinputContainer input');
    inputs.forEach((input) => {
      if (input.value !== '') {
        cols[input.getAttribute('data-id')] = input.value;
      }
    });
    ipcRenderer.send('updateRecord', {
      tableName: 'discount',
      columns: cols,
      condition: 'id',
      id: 'DS-A1',
    });
  };

  const profile = [
    { col: 'canteen', type: 'text', placeholder: 'Rs 0.0' },
    { col: 'game', type: 'text', placeholder: 'Rs 0.0' },
  ];

  useEffect(() => {
    ipcRenderer.once('get_discount', (event, data) => {
      setData(data);
    });
    ipcRenderer.send('getAll', 'discount');
  }, []);

  return (
    <Container title="Discount" para="Set discount for registered members.">
      <div className="px-2 py-2">
        {data.length > 0 &&
          profile.map((field, idx) => {
            const opts = {
              placeholder: field.placeholder,
              type: field.type,
              value: data[0][field.col],
              id: field.col,
              handler: setEditBtn,
            };
            return (
              <div id="dinputContainer" className="flex">
                <span className="text-gray-300 font-medium w-[40%]">
                  {field.col.charAt(0).toUpperCase() + field.col.slice(1)}
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

export default DiscountSetting;
