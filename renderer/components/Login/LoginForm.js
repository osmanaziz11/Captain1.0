import { appPreferences } from '../../redux/action';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { ipcRenderer } from 'electron';
import React from 'react';

function LoginForm({ handler }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    setError,
    formState: { errors },
  } = useForm();

  function success() {
    dispatch(appPreferences({ role: 'Admin' }));
    router.replace('/');
  }

  const submit = (user) => {
    ipcRenderer.send('getAll', 'admin');
    ipcRenderer.once('get_admin', (event, data) => {
      const username = data.filter((curr) => curr.username === user.username);
      username.length > 0
        ? username[0].password === user.password
          ? success()
          : setError('password', {
              type: 'manual',
              message: 'Inavalid password',
            })
        : setError('username', { type: 'custom', message: 'Invalid username' });
    });
  };
  return (
    <div className="w-full  justify-center items-center my-10 transition ">
      <div className="flex justify-center items-center flex-col   pb-10 transition  cursor-pointer">
        <div className="w-[370px] p-10 flex flex-col justify-center items-center  rounded h-[370px] bg-[#1b1b1b]  transition cursor-pointer">
          <h1 className="text-gray-300 font-medium">
            PlEASE PROVIDE CREDENTIALS
          </h1>
          <div className="relative w-full  pe-2  mt-10">
            <input
              type="text"
              className={`outline-none text-center bg-[#1b1b1b] border border-zinc-950 text-gray-400 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
              placeholder="Enter username"
              {...register('username', {
                required: {
                  value: true,
                  message: 'Username is required.',
                },
              })}
            />
          </div>
          <div className="relative w-full  pe-2  ">
            <input
              type="password"
              className={`outline-none text-center bg-[#1b1b1b] border border-zinc-950 mt-2 text-gray-300 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
              placeholder="Enter password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Passowrd is required.',
                },
              })}
            />
          </div>
          <p className=" font-normal text-red-500 text-xs  h-[30px] my-2 ">
            {errors.username
              ? errors.username?.message
              : errors.password?.message}
          </p>
          <button
            type="submit"
            className="w-full text-white    font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
            onClick={handleSubmit(submit)}
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full mt-3 text-white    font-medium rounded text-sm px-5 py-2.5 text-center bg-[#0f100f]"
            onClick={handler}
          >
            Back
          </button>
          <p className="text-gray-400 mt-4">Forget Password?</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
