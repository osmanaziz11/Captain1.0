import React, { useState } from 'react';
import ThemeModel from './theme';
import { useForm } from 'react-hook-form';
import { ipcRenderer } from 'electron';
import { useEffect } from 'react';
import { newItem } from '../validation';
import { useSelector } from 'react-redux';
const ItemModel = ({ handler, render }) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm();

  const validateInput = (event) => {
    setValue(event.target.name, event.target.value, {
      shouldValidate: true,
    });
  };

  const [gallery, setGallery] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const category = useSelector((state) => state.getCategories);

  const thumbnailSelect = (index) => {
    setSelectedIndex(index);
  };

  function addSuccess() {
    handler(false);
    render(Math.round(Math.random() * 100));
  }

  ipcRenderer.on('thumbnailsData', (event, data) => {
    if (data.error) {
      console.error(data.error);
    } else {
      setGallery(data.content);
    }
  });

  ipcRenderer.once('insert_items', (event, data) => {
    data.status == 1
      ? addSuccess()
      : setError('name', {
          type: 'manual',
          message: data.message,
        });
  });

  const submit = (data) => {
    data.purchasePrice = parseFloat(data.purchasePrice);
    data.salePrice = parseFloat(data.salePrice);
    data.quantity = parseInt(data.quantity);
    const payload = {
      ...data,
      thumbnail: selectedIndex === -1 ? 'default.png' : gallery[selectedIndex],
    };
    console.log(payload);
    ipcRenderer.send('insert', { tableName: 'items', record: payload });
  };

  useEffect(() => {
    ipcRenderer.send('getThumbnails');

    return () => {};
  }, []);

  return (
    <ThemeModel title="New Item Inventory" handler={handler}>
      <div className="w-full flex justify-between h-full">
        <form class=" w-3/5">
          <div className="w-full mb-6">
            <h4 className="linear-gradient">Please fill item information</h4>
          </div>
          {newItem.map((field, idx) => {
            return (
              <>
                <div class="relative w-full  pe-2  ">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {field.icon}
                  </div>
                  <input
                    type={field.type}
                    class={`outline-none  ${
                      errors[field.name]
                        ? 'border-[#fc1b1b]'
                        : 'border-[#272727]'
                    } border bg-[#1b1b1b] text-gray-400 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
                    placeholder={field.placeholder}
                    {...register(field.name, field.register)}
                  />
                </div>
                <p className=" font-normal text-red-500 text-xs  h-[20px]  ">
                  {errors[field.name] && errors[field.name].message}
                </p>
              </>
            );
          })}

          <div class="relative w-full  pe-2  ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <select
              name="category"
              {...register('category')}
              class="outline-none border-b-[#272727] bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5   placeholder-gray-400 "
            >
              {category.length > 0 &&
                category.map((cat, idx) => {
                  return <option value={cat.name}>{cat.name}</option>;
                })}
            </select>
          </div>
        </form>
        {/* Item Gallery  */}
        <div className="w-[38%] space-y-6 h-[344px]  overflow-hidden ">
          <div className="w-full">
            <h4 className="linear-gradient">Choose Item Thumbnail</h4>
          </div>
          <div className="w-full flex justify- item flex-wrap ">
            {/* selected item border-2 border-[#3AB54A] */}

            {gallery.length > 0 &&
              gallery.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                const borderClass = isSelected
                  ? 'border-green-500 border-2'
                  : '';

                return (
                  <div
                    key={idx}
                    id={idx}
                    className={`w-[65px] h-[68px] mb-1 me-[2.9px]  rounded-sm shadow-lg bg-[#1b1b1b] p-2 cursor-pointer ${borderClass}`}
                    onClick={() => thumbnailSelect(idx)}
                  >
                    <img
                      src={`/assets/items/${item}`}
                      className="w-full h-full object-contain transition-all"
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {/* End  */}
      </div>
      <button
        type="submit"
        class="w-full text-white mt-5  outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#22722E]"
        onClick={handleSubmit(submit)}
      >
        Add
      </button>
    </ThemeModel>
  );
};

export default ItemModel;
