import React from 'react';
import Quantity from '../Canteen/Quantity';
import { closeCart } from '../../redux/action';
import { useDispatch } from 'react-redux';

const ItemModel = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 w-screen h-full bg-[#0c0c0cd5] flex justify-center items-center z-50 right-0">
      <div className="w-[400px] h-[300px] bg-[#131212] rounded shadow-lg flex flex-col justify-between py-5 items-center">
        <h1 className="text-white font-semibold text-2xl linear-gradient">
          Choose Table
        </h1>
        <div>
          <select
            id="countries"
            className="border-[#918c8c] border-2 bg-transparent text-white  text-sm rounded block w-full  py-2 px-5 placeholder-gray-400 "
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="h-[100px] w-full px-10 flex justify-between items-center">
          <div className="text-white">
            <p>Title:</p>
            <p>Price:</p>
            <p>Quantity:</p>
            <p>Total</p>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <p>Coke Tin</p>
            <p>Rs/- 100</p>
            <p>
              <Quantity />
            </p>
            <p>100</p>
          </div>
          <div className=" h-full">
            <img src="/assets/item.png" className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="rounded-full bg-[#BB3232] text-white text-sm px-5 py-1"
            onClick={() => dispatch(closeCart())}
          >
            Cancel
          </button>
          <button className="rounded-full bg-[#22722E] text-white text-sm ms-3 px-5 py-1">
            Prcoeed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModel;
