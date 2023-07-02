import React, { useEffect, useState } from 'react';
import DelItem from '../Models/DelItem';
import { ipcRenderer } from 'electron';
import Pagination from '../Pagination';

const ItemsTable = ({ data, render }) => {
  const [deleteModel, selDeleteModel] = useState(false);
  const [pgeFilters, setPgeFilters] = useState([]);
  const [pgeIndex, setPgeIndex] = useState(0);
  const [delItem, setDelItem] = useState('');

  const applyPagination = () => {
    const tempArr = [...data];
    const pages = Math.ceil(tempArr.length / 7);
    const pgeArr = [];
    for (var i = 0; i < pages; i++) {
      const end = tempArr.length > 7 ? 7 : tempArr.length;
      pgeArr.push(tempArr.slice(0, end));
      tempArr.splice(0, end);
    }
    return pgeArr;
  };

  ipcRenderer.once('itemsUpdate', (event, data) => {
    data.status === 200 && render(Math.round(Math.random() * 100));
  });
  const handleUpdate = (dict, id) => {
    ipcRenderer.send('updateRecord', {
      tableName: 'items',
      columns: { ...dict },
      condition: 'name',
      id: `${id}`,
    });
  };

  const handleAction = (idx, action, id) => {
    const rootElement = document.getElementById(idx);
    const inputElements = rootElement.querySelectorAll('input');
    let flag = 0;
    const dict = {};
    inputElements.forEach((input) => {
      if (action === 'edit') {
        input.removeAttribute('readOnly');
        input.classList.remove('bg-transparent');
        input.classList.add('bg-zinc-800');
        flag = -1;
        return;
      } else {
        if (input.value === '') {
          flag++;
          input.classList.remove('border-0');
          input.classList.add('border-red-700');
          input.classList.add('border');
          return;
        }
        dict[input.getAttribute('data-id')] = parseInt(input.value);
        input.setAttribute('readOnly', true);
        input.classList.add('bg-transparent');
        input.classList.remove('bg-zinc-800');
        input.classList.remove('border');
      }
    });

    if (flag > 0 && action !== 'edit') return;
    if (flag === 0 && action !== 'edit') handleUpdate(dict, id);
    rootElement.querySelector('#editBtn').classList.toggle('hidden');
    rootElement.querySelector('#saveBtn').classList.toggle('hidden');
  };

  const opts = {
    pages: pgeFilters,
    currIndex: pgeIndex,
    setPgeIndex: setPgeIndex,
  };

  useEffect(() => {
    const arr = applyPagination();
    setPgeFilters([...arr]);
  }, [data]);

  return (
    <>
      {deleteModel && (
        <DelItem handler={selDeleteModel} data={delItem} render={render} />
      )}
      <section className="w-full  mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden  bg-[#1b1b1b] md:rounded-t-lg">
                <table className="min-w-full  border-[#272727]   shadow-lg">
                  <thead className="bg-[#252525]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <button className="flex items-center gap-x-2 justify-center">
                            Item name
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Quantity
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Category
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Purchase Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Sale Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Remaining
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Sold
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#1b1b1b] ">
                    {pgeFilters.length > 0 ? (
                      pgeFilters[pgeIndex].map((item, idx) => {
                        return (
                          idx < 7 && (
                            <tr
                              className="border-b border-b-[#272727]"
                              id={idx}
                            >
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                                <div className="inline-flex items-center gap-x-3 justify-center">
                                  {item.name}
                                </div>
                              </td>

                              <td className="px-4 py-4 text-sm  whitespace-nowrap text-center font-medium text-white">
                                <input
                                  type="number"
                                  defaultValue={item.quantity}
                                  data-id="quantity"
                                  readOnly
                                  className="bg-transparent transition w-20 rounded py-1 border-0 text-center outline-none"
                                />
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center font-medium">
                                {item.category}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center font-medium">
                                {item.purchasePrice}
                              </td>
                              <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center font-medium">
                                <input
                                  type="number"
                                  defaultValue={item.salePrice}
                                  data-id="salePrice"
                                  readOnly
                                  className="bg-transparent transition-all w-20 rounded py-1 border-0 text-center outline-none"
                                />
                              </td>
                              <td
                                className={`px-4 py-4 text-sm  whitespace-nowrap text-center ${
                                  Math.abs(item.quantity - item.sold) <= 5
                                    ? 'text-red-600'
                                    : Math.abs(item.quantity - item.sold) ==
                                      parseInt(
                                        Math.abs(item.quantity - item.sold) / 2
                                      )
                                    ? 'text-yellow-600'
                                    : 'text-white'
                                } font-medium`}
                              >
                                {Math.abs(item.quantity - item.sold)}
                              </td>
                              <td
                                className={`px-4 py-4 text-sm   whitespace-nowrap text-center ${
                                  item.sold !== 0
                                    ? 'text-green-600'
                                    : 'text-white'
                                } font-medium`}
                              >
                                {item.sold}
                              </td>
                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div
                                  className="flex items-center gap-x-6 justify-center
                      "
                                >
                                  <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none flex">
                                    <span
                                      id="saveBtn"
                                      className="hidden"
                                      onClick={() =>
                                        handleAction(idx, '', item.name)
                                      }
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-green-900 transition hover:text-green-700"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M14.8 9c.1-.3.2-.6.2-1c0-2.2-1.8-4-4-4c-1.5 0-2.9.9-3.5 2.2c-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5c-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16h10c1.9 0 3.5-1.6 3.5-3.5c0-1.8-1.4-3.3-3.2-3.5zm-6.3 5.9l-3.2-3.2l1.4-1.4l1.8 1.8l3.8-3.8l1.4 1.4l-5.2 5.2z"
                                        />
                                      </svg>
                                    </span>
                                    <span
                                      onClick={() =>
                                        handleAction(idx, 'edit', '')
                                      }
                                      id="editBtn"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-green-900 transition hover:text-green-700"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
                                        />
                                        <path
                                          fill="currentColor"
                                          d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
                                        />
                                      </svg>
                                    </span>
                                    <span className="mx-1"></span>
                                    <span
                                      onClick={() => {
                                        selDeleteModel(true);
                                        setDelItem(item.name);
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-red-800 transition hover:text-red-600"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        );
                      })
                    ) : (
                      <tr className="py-4 px-4 font-medium text-gray-500 dark:text-gray-400">
                        <td className="p-2">No items to show.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Pagination ==== */}
      {data.length > 7 && <Pagination {...opts} />}
      {/* ==== End ====  */}
    </>
  );
};

export default ItemsTable;
