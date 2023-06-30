import { addMember } from '../inputValidations/addMember';
import { useForm } from 'react-hook-form';
import { currentDate } from '../../util';
import { ipcRenderer } from 'electron';
import ThemeModel from './theme';
import React from 'react';

const MemberModel = ({ handler, render }) => {
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

  function success() {
    handler(false);
    render(Math.round(Math.random() * 100));
  }
  ipcRenderer.once('membersInsert', (event, data) => {
    data.status === 200 && success();
    data.status === 400 &&
      setError('phoneNumber', {
        message: 'User already exists with this phone number.',
      });
  });

  const submit = (data) => {
    ipcRenderer.send('insertRecord', { tableName: 'members', columns: data });
    ipcRenderer.send('insertRecord', {
      tableName: 'payingHistory',
      columns: {
        phoneNumber: data.phoneNumber,
        date: currentDate(),
        paid: 0,
        balance: 0,
      },
    });
  };

  return (
    <ThemeModel title="New Member Inventory" handler={handler}>
      <form className="" action="#">
        {addMember.map((field, idx) => {
          return (
            <>
              <div key={idx} className="relative w-full  pe-2  ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {field.icon}
                </div>
                <input
                  type={field.type}
                  className={`outline-none  ${
                    errors[field.name] ? 'border-[#fc1b1b]' : 'border-[#272727]'
                  } border bg-[#1b1b1b] text-gray-400 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
                  placeholder={field.placeholder}
                  {...register(field.name, {
                    ...field.register,
                    onChange: validateInput,
                  })}
                />
              </div>
              <p className=" font-normal text-red-500 text-xs  h-[20px]  ">
                {errors[field.name] && errors[field.name].message}
              </p>
            </>
          );
        })}
        <button
          type="submit"
          className="w-full text-white    font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
          onClick={handleSubmit(submit)}
        >
          Add
        </button>
      </form>
    </ThemeModel>
  );
};

export default MemberModel;
