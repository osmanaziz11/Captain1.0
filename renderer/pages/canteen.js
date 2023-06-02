import FloatingCart from '../components/Canteen/FloatingCart';
import { useDispatch, useSelector } from 'react-redux';
import ItemModel from '../components/Models/ItemModel';
import Category from '../components/Canteen/Category';
import Search from '../components/Canteen/Search';
import Item from '../components/Canteen/Item';
import { resetCart } from '../redux/action';
import { useEffect } from 'react';
import React from 'react';
import Cart from '../components/Models/Cart';

const Canteen = () => {
  const category = ['All', 'Drinks', 'Fast Food', 'Shakes', 'Junk'];
  const cart = useSelector((state) => state.cartModel);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetCart());
    };
  }, []);

  return (
    <>
      {/* {cart && <Cart />} */}
      <div className="canteen p-10 w-full h-full overflow-scroll">
        {/* ==== Filters & Search ===== */}
        <div className="w-full h-[50px] flex">
          <div className="filters w-3/4">
            <ul className="flex w-full items-center">
              {category.map((item, idx) => {
                return <Category name={item} />;
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
          <Item data={{ id: 1, title: 'Regular Pepsi', price: 'Rs/- 60' }} />
          <Item data={{ id: 2, title: 'Coke Tin', price: 'Rs/- 100' }} />
          <Item data={{ id: 3, title: 'Lays', price: 'Rs/- 40' }} />
          <Item data={{ id: 4, title: 'French Fries', price: 'Rs/- 100' }} />

          <Item data={{ id: 5, title: 'Burger', price: 'Rs/- 200', qty: 0 }} />
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
