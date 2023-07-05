import React, { useRef, useState } from 'react';

function CustomField(props) {
  const [input, setInput] = useState(true);
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current) {
      props.handler(false);
      inputRef.current.focus();
      setInput(!input);
    }
  };

  return (
    <div className="w-full flex justify-between mb-2">
      <input
        ref={inputRef}
        type={props.type}
        data-id={props.id}
        readOnly={input}
        onBlur={() => setInput(true)}
        defaultValue={props.value}
        placeholder={props.placeholder}
        className="border-0 outline-none bg-transparent placeholder:text-gray-400 text-gray-300 font-medium "
      />
      <span onClick={handleInput}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5  transition  cursor-pointer text-gray-400"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
          />
          <path
            fill="currentColor"
            d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
          />
        </svg>
      </span>
    </div>
  );
}

export default CustomField;
