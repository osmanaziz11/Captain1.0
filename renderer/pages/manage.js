import ItemsTable from '../components/Manage/ItemsTable';
import Category from '../components/Canteen/Category';
import Search from '../components/Canteen/Search';
import React from 'react';
import ItemModel from '../components/Models/ItemModel';

const Manage = () => {
  const category = ['All', 'Drinks', 'Fast Food', 'Shakes', 'Junk'];
  return (
    <div className="canteen p-10 w-full h-full overflow-scroll">
      {/* <CategoryModel /> */}
      {/* <ItemModel /> */}

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

      {/* ==== Canteen items Detail Window ===== */}
      <div className="w-full px-0 flex flex-wrap mt-5">
        <ItemsTable />
      </div>
      {/* ==== End ===== */}
    </div>
  );
};

export default Manage;
