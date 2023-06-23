import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../../redux/action';
import React, { useState } from 'react';

const FloatingCart = () => {
  const cart = useSelector((state) => state.getCartItems);
  const dispatch = useDispatch();

  return (
    <div
      className="fixed rounded-full w-[40px] h-[40px] bg-[#1b1b1b] border-2 border-[#272727] shadow-lg bottom-11 right-10 animate-bounce cursor-pointer flex justify-center items-center"
      onClick={() => (cart.length > 0 ? dispatch(openCart()) : undefined)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fill="white"
          d="M2.997 3.496a.5.5 0 0 1 .5-.5h.438c.727 0 1.145.473 1.387.945c.165.323.284.717.383 1.059H16a1 1 0 0 1 .962 1.272l-1.496 5.275A2 2 0 0 1 13.542 13H8.463a2 2 0 0 1-1.93-1.473l-.642-2.355a.513.513 0 0 1-.01-.032L4.85 5.643l-.1-.337c-.1-.346-.188-.652-.32-.909c-.159-.31-.305-.4-.496-.4h-.438a.5.5 0 0 1-.5-.5ZM8.5 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
        />
      </svg>
      <p className="absolute -top-3 text-sm bg-red-600 w-[20px] h-[20px] rounded-full text-white text-center">
        {cart.length}
      </p>
    </div>
  );
};

export default FloatingCart;
