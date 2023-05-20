import Category from '../components/Canteen/Category';
import Search from '../components/Canteen/Search';
import Item from '../components/Canteen/Item';
import React from 'react';

const Canteen = () => {
  const category = ['All', 'Drinks', 'Fast Food', 'Shakes', 'Junk'];
  return (
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
      <div className="w-full px-0 flex flex-wrap mt-3 ">
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
      </div>
      {/* ==== End ===== */}

      {/* ==== Canteen items Window ===== */}
      <div className="w-full px-0 flex flex-wrap mt-5">
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
        <Item data={{ title: 'Coke Tin', price: 'Rs/- 100' }} />
      </div>
      {/* ==== End ===== */}
    </div>
  );
};

export default Canteen;
