import React, { useEffect, useState } from 'react';
import CustomField from './CustomField';
import { ipcRenderer } from 'electron';
import Container from './Container';

function ProfileSetting() {
  const [data, setData] = useState([]);
  const [EditBtn, setEditBtn] = useState(true);

  const handleSubmit = () => {
    const cols = {};
    const inputs = document.querySelectorAll('#pinputContainer input');
    inputs.forEach((input) => {
      if (input.value !== '') {
        cols[input.getAttribute('data-id')] = input.value;
      }
    });
    ipcRenderer.send('updateRecord', {
      tableName: 'admin',
      columns: cols,
      condition: 'id',
      id: 'admin',
    });
  };

  const profile = [
    { col: 'username', type: 'text', placeholder: 'captain' },
    { col: 'password', type: 'password', placeholder: 'xxxxxx' },
    { col: 'name', type: 'text', placeholder: 'Osman' },
    { col: 'email', type: 'email', placeholder: 'captain@gmail.com' },
  ];

  useEffect(() => {
    ipcRenderer.once('get_admin', (event, data) => {
      setData(data);
    });
    ipcRenderer.send('getAll', 'admin');
  }, []);

  return (
    <Container title="Profile" para="Set your admin credentials.">
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
              <div id="pinputContainer" className="flex">
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

export default ProfileSetting;
