import React from 'react';
import ThemeModel from './theme';
import { ipcRenderer } from 'electron';
const DelCategory = ({ handler, data, render }) => {
  ipcRenderer.once('delete_categories', (event, data) => {
    if (data.status == 1) {
      handler(false);
      render(Math.round(Math.random() * 100));
    }
  });
  function delCategory() {
    ipcRenderer.send('delete', {
      tableName: 'categories',
      col: 'name',
      condition: data.name,
    });
  }
  return (
    <ThemeModel title="Delete Category" handler={handler}>
      <div className="my-3 flex justify-center items-center">
        <span className="me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-600"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="currentColor"
                d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0ZM12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1Z"
              />
            </g>
          </svg>
        </span>
        <p className="font-medium text-red-600">
          Are you sure to delete this category?
        </p>
      </div>
      <div className="flex ">
        <button
          type="submit"
          class="w-full mx-2 text-white   outline-none  font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
          style={{ marginTop: '10px' }}
          onClick={() => handler(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          class="w-full mx-2 text-white   outline-none  font-medium rounded text-sm px-5 py-2.5 text-center bg-red-600"
          style={{ marginTop: '10px' }}
          onClick={delCategory}
        >
          Delete
        </button>
      </div>
    </ThemeModel>
  );
};

export default DelCategory;
