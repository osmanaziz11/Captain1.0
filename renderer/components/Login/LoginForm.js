import React from 'react';

function LoginForm({ handler }) {
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
            />
          </div>
          <div className="relative w-full  pe-2  ">
            <input
              type="password"
              className={`outline-none text-center bg-[#1b1b1b] border border-zinc-950 mt-2 text-gray-300 text-sm rounded block w-full pl-10 p-2.5 transition   placeholder-gray-400 `}
              placeholder="Enter password"
            />
          </div>
          <p className=" font-normal text-red-500 text-xs  h-[30px] my-2 opacity-0 ">
            Lorem ipsum dolor sit amet consectetur et?
          </p>
          <button
            type="submit"
            className="w-full text-white    font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
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
