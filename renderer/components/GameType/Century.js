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
  const [option, setOption] = useState(false);

  return (
    <div className="w-full h-full bg-transparent mb-4  flex flex-col justify-center items-center">
      {!option ? (
        <>
          <p
            className="mx-4 text-white font-medium"
            onClick={() => setOption(true)}
          >
            Individuals
          </p>
          <p
            className="mx-4 text-white font-medium"
            onClick={() => setOption(true)}
          >
            Teams
          </p>
        </>
      ) : (
        <div>
          <p
            className="text-center text-red-600 font-medium"
            onClick={() => setOption(false)}
          >
            Back
          </p>
          <Individuals />
        </div>
      )}
    </div>
  );
};

export default Century;
