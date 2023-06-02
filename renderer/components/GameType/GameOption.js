import { gameOptions, optionTypes } from '../../data/data';
import React, { useRef, useState } from 'react';
import Option from './Option';
import PlayersDetail from './PlayersDetail';

const GameOptions = () => {
  const optionRef = useRef(null);
  const typeRef = useRef(null);
  const detailsRef = useRef(null);

  const [deactWindow, setDwindow] = useState([]);
  const [selectedOption, setOption] = useState('');
  const [actWindow, setAwindow] = useState([optionRef, typeRef, detailsRef]);

  function removeClass() {
    actWindow[0].current.classList.remove('active');
    actWindow[0].current.classList.remove('moveDownword');
  }

  function addClass(ref, name) {
    ref.current.classList.add(name);
  }

  function moveNEXT() {
    removeClass();
    addClass(actWindow[0], 'moveUpword');
    const ref = actWindow.shift();
    setDwindow((arr) => [...arr, ref]);
    addClass(actWindow[0], 'active');
  }

  function moveBACK() {
    removeClass();
    addClass(actWindow[0], 'moveDownword');
    addClass(deactWindow[deactWindow.length - 1], 'active');
    const ref = deactWindow.pop();
    setAwindow((arr) => [ref, ...arr]);
  }

  return (
    <>
      <div className="relative w-full h-[120px] overflow-hidden flex flex-col justify-center items-center">
        <div ref={optionRef} className={`flex  absolute z-50  active`}>
          {gameOptions.length > 0 &&
            gameOptions.map((type, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => {
                    moveNEXT();
                    setOption(type.name);
                  }}
                >
                  {<Option type={type} />}
                </div>
              );
            })}
        </div>
        <div ref={typeRef} className={`flex absolute  transition moveDownword`}>
          {optionTypes.length > 0 &&
            optionTypes.map((type, idx) => {
              return (
                <div key={idx} onClick={moveNEXT}>
                  {<Option type={type} />}
                </div>
              );
            })}
        </div>
        <div
          ref={detailsRef}
          className={`flex absolute transition moveDownword w-full h-full `}
        >
          <PlayersDetail type={selectedOption} />
        </div>
      </div>
      <div
        className={`opacity-${
          deactWindow.length > 0 ? '100' : '0'
        } transition duration-1000`}
      >
        <button
          className="px-5 py-1 text-xs bg-red-800 rounded text-white shadow-md"
          onClick={moveBACK}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default GameOptions;
