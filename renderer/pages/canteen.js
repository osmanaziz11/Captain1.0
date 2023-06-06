import FloatingCart from '../components/Canteen/FloatingCart';
import { useDispatch, useSelector } from 'react-redux';
import ItemModel from '../components/Models/ItemModel';
import Category from '../components/Canteen/Category';
import Search from '../components/Canteen/Search';
import Item from '../components/Canteen/Item';
import { closeCart, getCategories, getItems, resetCart } from '../redux/action';
import { useEffect } from 'react';
import React from 'react';
import Cart from '../components/Models/Cart';
import { useState } from 'react';

const Canteen = () => {
  const categories = useSelector((state) => state.getCategories);
  const items = useSelector((state) => state.getItems);
  const cart = useSelector((state) => state.cartModel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
    return () => {
      dispatch(resetCart());
    };
  }, []);

  function closeCartModel(value) {
    dispatch(closeCart());
  }
  return (
    <>
      {cart && <Cart handler={closeCartModel} />}

      <div className="canteen p-10 w-full h-full overflow-scroll">
        {/* ==== Filters & Search ===== */}
        <div className="w-full h-[50px] flex">
          <div className="filters w-3/4">
            <ul className="flex w-full items-center">
              {categories.length > 1 && (
                <li className=" relative h-[40px] transition mx-2 border-b-2 rounded text-sm flex justify-center border-b-[#1b1b1b] bg-[#1b1b1b] shadow-lg text-white py-2 px-4 cursor-pointer">
                  All
                </li>
              )}
              {categories.length > 0 &&
                categories.map((item, idx) => {
                  return <Category key={item.id} data={item} opts="1" />;
                })}
            </ul>
          </div>
          <div className="search w-1/4">
            <Search />
          </div>
        </div>
        {/* ==== End ===== */}

        {/* ==== Recent Items Window ===== */}
        {/* <div className="w-full px-0 flex flex-wrap mt-3 ">
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
      </div> */}
        {/* ==== End ===== */}

        {/* ==== Canteen items Window ===== */}
        <div className="w-full px-0 flex flex-wrap mt-5">
          {items.length > 0 ? (
            items.map((item, idx) => {
              return <Item data={item} />;
            })
          ) : (
            <p className="py-4 px-4 font-medium text-base">
              You don't have any inventory
            </p>
          )}
        </div>
        {/* ==== End ===== */}

        {/* ===== Floating Cart ===== */}
        <FloatingCart />
        {/* ===== End ===== */}
      </div>
    </>
  );
};

export default Canteen;
