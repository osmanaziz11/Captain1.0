import { closeCart, getCategories, getItems, resetCart } from '../redux/action';
import FloatingCart from '../components/Canteen/FloatingCart';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../components/Canteen/Category';
import Search from '../components/Canteen/Search';
import Item from '../components/Canteen/Item';
import { useEffect, useState } from 'react';
import Cart from '../components/Models/Cart';
import Empty from '../components/Empty';
import shortUUID from 'short-uuid';

const Canteen = () => {
  const categories = useSelector((state) => state.getCategories);
  const items = useSelector((state) => state.getItems);
  const cart = useSelector((state) => state.cartModel);

  const [render, setRender] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
    return () => {
      dispatch(resetCart());
    };
  }, [render]);

  function closeCartModel(value) {
    dispatch(closeCart());
  }

  return (
    <>
      {cart && <Cart handler={closeCartModel} render={setRender} />}

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
                categories.map((item) => {
                  return (
                    <Category key={shortUUID.generate()} data={item} opts="1" />
                  );
                })}
            </ul>
          </div>
          <div className="search w-1/4">
            <Search />
          </div>
        </div>
        {/* ==== End ===== */}

        {/* ==== Canteen items Window ===== */}
        <div className="w-full px-0 flex flex-wrap mt-5 ">
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <Item key={shortUUID.generate()} render={render} data={item} />
              );
            })
          ) : (
            <Empty />
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
