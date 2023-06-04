import React from 'react';
import ThemeModel from './theme';
import { useForm } from 'react-hook-form';
import { ipcRenderer } from 'electron';

const CategoryModel = ({ handler }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    setError,
  } = useForm();

  const validateInput = (event) => {
    setValue(event.target.name, event.target.value, {
      shouldValidate: true,
    });
  };

  ipcRenderer.once('insert_categories', (event, data) => {
    data.status == 1
      ? handler(false)
      : setError('category', {
          type: 'manual',
          message: data.message,
        });
  });
  async function submit(data) {
    try {
      ipcRenderer.send('insert', {
        tableName: 'categories',
        record: { name: data.category },
      });
    } catch (error) {}
  }

  return (
    <ThemeModel title="New Category Inventory" handler={handler}>
      <form class="space-y-6" onSubmit={handleSubmit(submit)}>
        <div class="relative w-full shadow">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 48 48"
            >
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M9.263 6c-.378 0-.715.262-.845.656L6.11 13.667a2.2 2.2 0 0 0-.11.687v2.789C6 18.72 7.151 20 8.571 20c1.42 0 2.572-1.28 2.572-2.857c0 1.578 1.151 2.857 2.571 2.857c1.42 0 2.572-1.28 2.572-2.857c0 1.578 1.151 2.857 2.571 2.857c1.42 0 2.57-1.278 2.572-2.855C21.429 18.722 22.58 20 24 20c1.42 0 2.571-1.28 2.571-2.857c0 1.578 1.152 2.857 2.572 2.857c1.42 0 2.57-1.278 2.571-2.855c.001 1.577 1.152 2.855 2.572 2.855c1.42 0 2.571-1.28 2.571-2.857c0 1.578 1.151 2.857 2.572 2.857C40.849 20 42 18.72 42 17.143v-2.789a2.2 2.2 0 0 0-.11-.687l-2.308-7.01c-.13-.395-.467-.657-.845-.657H9.263Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M10 21.23V29H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h33a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H38v-7.77a3.916 3.916 0 0 1-1.143-.703a3.953 3.953 0 0 1-.857.576V29H12v-7.897a3.953 3.953 0 0 1-.857-.576c-.336.295-.72.535-1.143.703Zm26-1.957c.085-.085.165-.176.24-.273H36v.273ZM37.474 19a2.75 2.75 0 0 0 .526.519V19h-.526ZM10 19.519a2.63 2.63 0 0 0 .526-.519H10v.519ZM11.76 19H12v.273a2.766 2.766 0 0 1-.24-.273ZM8.5 33a.5.5 0 0 0-.5.5V41a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-7.5a.5.5 0 0 0-.5-.5h-31Z"
                  clip-rule="evenodd"
                />
                <path d="M14 26.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Z" />
                <path d="M16 27.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1Zm8 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" />
              </g>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class={`outline-none mb-1 ${
              errors.category ? 'border-[#fc1b1b]' : 'border-[#272727]'
            } border bg-[#1b1b1b] text-gray-400 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
            placeholder="Enter category name"
            {...register('category', {
              onChange: validateInput,
              minLength: {
                value: 4,
                message: 'Category name must have at least 4 characters',
              },
              maxLength: {
                value: 12,
                message: 'Category name can have at most 15 characters',
              },
              required: 'Category name is required',
              pattern: {
                value: /^[A-Z a-z]+$/,
                message:
                  'Category name must contain only alphabetic characters',
              },
            })}
          />
        </div>
        {errors.category && (
          <p
            className=" font-normal text-red-500 text-sm"
            style={{ margin: '0px' }}
          >
            {errors.category.message}
          </p>
        )}
        <button
          type="submit"
          class="w-full m-0 text-white   outline-none  font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
          style={{ marginTop: '10px' }}
        >
          Add
        </button>
      </form>
    </ThemeModel>
  );
};

export default CategoryModel;
