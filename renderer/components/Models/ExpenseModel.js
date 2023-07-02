import { useForm } from 'react-hook-form';
import { currentDate } from '../../util';
import { ipcRenderer } from 'electron';
import ThemeModel from './theme';
import React from 'react';

const ExpenseModel = ({ handler, render }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const validateInput = (event) => {
    setValue(event.target.name, event.target.value, {
      shouldValidate: true,
    });
  };

  function success() {
    handler(false);
    render(Math.round(Math.random() * 100));
  }

  ipcRenderer.once('expensesInsert', (event, data) => {
    data.status === 200 && success();
  });

  const submit = (data) => {
    ipcRenderer.send('insertRecord', {
      tableName: 'expenses',
      columns: {
        ...data,
        date: currentDate(),
      },
    });
  };

  return (
    <ThemeModel title="New Expense Inventory" handler={handler}>
      <form className="" action="#">
        <div className="relative w-full  pe-2  ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m15 16l-4 4h10v-4h-6m-2.94-8.81L3 16.25V20h3.75l9.06-9.06l-3.75-3.75m6.65.85c.39-.39.39-1.04 0-1.41l-2.34-2.34a1.001 1.001 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className={`outline-none  ${
              errors.type ? 'border-[#fc1b1b]' : 'border-[#272727]'
            } border bg-[#1b1b1b] text-gray-400 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
            placeholder="Enter expense type"
            {...register('type', {
              required: {
                value: true,
                message: 'Expense type is required',
              },
              onChange: validateInput,
            })}
          />
        </div>
        <p className=" font-normal text-red-500 text-xs  h-[20px]  ">
          {errors.type && errors.type.message}
        </p>
        <div className="relative w-full  pe-2  ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path d="M8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
              </g>
            </svg>
          </div>
          <input
            type="number"
            className={`outline-none  ${
              errors.amount ? 'border-[#fc1b1b]' : 'border-[#272727]'
            } border bg-[#1b1b1b] text-gray-400 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
            placeholder="Enter expense amount"
            {...register('amount', {
              required: {
                value: true,
                message: 'Expense amount is required',
              },
              onChange: validateInput,
            })}
          />
        </div>
        <p className=" font-normal text-red-500 text-xs  h-[20px]  ">
          {errors.amount && errors.amount.message}
        </p>
        <button
          type="submit"
          className="w-full text-white    font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E] outline-none"
          onClick={handleSubmit(submit)}
        >
          Add
        </button>
      </form>
    </ThemeModel>
  );
};

export default ExpenseModel;
