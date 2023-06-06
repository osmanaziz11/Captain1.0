import { addToCart, removeFromCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

const Item = ({ data }) => {
  const [itemClick, setItemClick] = useState(false);
  const dispatch = useDispatch();

  const itemCart = () => {
    setItemClick((item) => !item);
    if (!itemClick) {
      dispatch(addToCart(data));
    } else {
      dispatch(removeFromCart({ id: data.id }));
    }
  };

  return (
    <div
      className={`relative w-[197px] h-[223px]  border-green-900 transition bg-[#1b1b1b] rounded-md  flex flex-col justify-center items-center shadow-lg cursor-pointer me-2 mb-3`}
    >
      <div className={`w-[80%] h-[65%]`}>
        <img
          src={`/assets/items/${data.thumbnail}`}
          className="w-full h-full object-contain hover:scale-110 hover:rotate-2 transition-all"
          alt=""
        />
      </div>
      <div className="w-full ">
        <p className="text-center text-white">{data.name}</p>
        <p className="text-center text-white">{data.salePrice}</p>
      </div>
      {/* ===== Out of stock effect ==== 1a1919da */}
      {Math.abs(data.quantity - data.sold) === 0 && (
        <div
          className="w-full h-full absolute top-0 bg-[#1a1919da] cursor-not-allowed z-40"
          onClick={() => undefined}
        ></div>
      )}
      {/* ==== End ==== */}

      {/* ==== Item Selected ==== */}
      <div
        className={`w-full h-full absolute top-0 bg-[#1a191931] transition border-2 border-[#3AB54A] rounded z-0 ${
          itemClick ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={itemCart}
      >
        <span className="absolute -top-2 -right-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
          >
            <path
              fill="#3AB54A"
              fill-rule="evenodd"
              d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      {/* ==== End ==== */}
    </div>
  );
};

export default Item;
