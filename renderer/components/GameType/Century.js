import React, { useState } from 'react';

function Vs() {
  return (
    <div className=" flex justify-center items-center mb-2">
      <input
        type="text"
        name=""
        id=""
        placeholder="Player 1"
        className="text-end   bg-transparent outline-none text-gray-400 placeholder-gray-400 "
      />
      <h1
        className="text-xl mx-5 font-extrabold text-white"
        onClick={() => setVS(false)}
      >
        VS
      </h1>
      <input
        type="text"
        name=""
        placeholder="Player 2"
        id=""
        className="text-start   bg-transparent outline-none text-gray-400 placeholder-gray-400 "
      />
    </div>
  );
}
function Individuals() {
  const [add, setAdd] = useState([1, 3, 4]);
  return (
    <>
      {add.length > 0 &&
        add.map((_, idx) => {
          return (
            <input
              type="text"
              name=""
              id=""
              placeholder="Player 1"
              className="text-center   bg-transparent outline-none text-gray-400 placeholder-gray-400 "
            />
          );
        })}
      <div
        className="h-[18px] my-1 w-[30px] text-sm flex justify-center items-center  border-dotted border-2 border-red-800 text-white font-medium"
        onClick={() => setAdd((arr) => [...arr, 1])}
      >
        +
      </div>
    </>
  );
}
function Teams() {
  const [add, setAdd] = useState([1]);
  return (
    <>
      {add.length > 0 &&
        add.map((_, idx) => {
          return <Vs />;
        })}
      <p
        className="text-red-800 font-extrabold"
        onClick={() => setAdd((arr) => [...arr, 1])}
      >
        Add
      </p>
    </>
  );
}
const Century = () => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);

  return (
    <div className="w-full h-full bg-transparent mb-4  flex flex-col justify-center items-center">
      {!option1 && !option2 ? (
        <>
          <p
            className="mx-4 text-white font-medium"
            onClick={() => setOption1(true)}
          >
            Individuals
          </p>
          <p
            className="mx-4 text-white font-medium"
            onClick={() => setOption2(true)}
          >
            Teams
          </p>
        </>
      ) : option1 ? (
        <div className="flex flex-col justify-center items-center">
          <p
            className="text-center text-red-600 font-medium"
            onClick={() => {
              setOption1(false);
              setOption2(false);
            }}
          >
            Back
          </p>
          <Individuals />
        </div>
      ) : option2 ? (
        <div className="flex flex-col justify-center items-center">
          <p
            className="text-center text-red-600 font-medium"
            onClick={() => {
              setOption1(false);
              setOption2(false);
            }}
          >
            Back
          </p>
          <Teams />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Century;
