import { addMember } from '../inputValidations/addMember';
import { useForm } from 'react-hook-form';
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

  function addSuccess() {
    handler(false);
    render(Math.round(Math.random() * 100));
  }
  ipcRenderer.once('insert_members', (event, data) => {
    data.status == 1
      ? addSuccess()
      : setError('phoneNumber', {
          type: 'manual',
          message: data.message,
        });
  });

  const submit = (data) => {
    ipcRenderer.send('insert', { tableName: 'members', record: data });
  };

  return (
    <ThemeModel title="New Member Inventory" handler={handler}>
      <form class="" action="#">
        {addMember.map((field, idx) => {
          return (
            <>
              <div key={idx} class="relative w-full  pe-2  ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {field.icon}
                </div>
                <input
                  type={field.type}
                  class={`outline-none  ${
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
          class="w-full text-white    font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
          onClick={handleSubmit(submit)}
        >
          Add
        </button>
      </form>
    </ThemeModel>
  );
};

export default MemberModel;
