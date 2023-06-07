import ItemsTable from '../components/Manage/ItemsTable';
import Category from '../components/Canteen/Category';
import Search from '../components/Canteen/Search';
import React from 'react';
import ItemModel from '../components/Models/ItemModel';
import CategoryModel from '../components/Models/CategoryModel';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getItems } from '../redux/action';
import Pagination from '../components/Pagination';

const Manage = () => {
  const categories = useSelector((state) => state.getCategories);
  const items = useSelector((state) => state.getItems);

  const [categ, setCateg] = useState(false);
  const [item, setItem] = useState(false);
  const [render, setRender] = useState(0);
  const [filters, setFilters] = useState([...items]);
  const [selectedCatg, setSelectedCatg] = useState('All');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
  }, [render]);

  return (
    <div className="canteen p-10 w-full h-full overflow-scroll">
      {categ && <CategoryModel handler={setCateg} render={setRender} />}
      {item && <ItemModel handler={setItem} render={setRender} opts="0" />}

      {/* ==== Filters & Search ===== */}
      <div className="w-full h-[50px] flex">
        <div className="filters w-[60%] overflow-hidden">
          <ul className="flex w-full items-center">
            {categories.length > 1 && (
              <li
                className={`${
                  selectedCatg === 'All' && 'bg-zinc-800'
                } relative h-[40px] transition mx-2 border-b-2 rounded text-sm flex justify-center  border-[#1b1b1b] shadow-lg text-white py-2 px-4 cursor-pointer`}
                onClick={() => {
                  setSelectedCatg('All');
                  setFilters([...items]);
                }}
              >
                All
              </li>
            )}
            {categories.length > 0 &&
              categories.map((item, idx) => {
                return (
                  <Category
                    key={idx}
                    data={item}
                    render={setRender}
                    filters={setFilters}
                    selectedCatg={selectedCatg}
                    setSelectedCatg={setSelectedCatg}
                  />
                );
              })}
          </ul>
        </div>
        <div className="search w-[40%] h-[40px] flex">
          <Search filter={selectedCatg} applyFilters={setFilters} />
          <div
            class="mx-3 relative px-3  shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[40px] cursor-pointer "
            onClick={() => setCateg(true)}
          >
            <p className="text-gray-400 text-2xl font-bold me-2 pb-1"> +</p>
            <p className="text-gray-400 "> Category</p>
          </div>
          <div
            class=" relative px-4 shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[40px] cursor-pointer "
            onClick={() => setItem(true)}
          >
            <p className="text-gray-400 text-2xl font-bold me-1 pb-1"> +</p>
            <p className="text-gray-400 "> Item</p>
          </div>
        </div>
      </div>
      {/* ==== End ===== */}

      {/* ==== Canteen items Detail Window ===== */}
      <div className="w-full px-0 flex flex-wrap mt-5">
        <ItemsTable data={filters} setRender={setRender} />
      </div>
      {/* ==== End ===== */}

      {/* ==== Pagination ==== */}
      {filters.length > 7 && <Pagination />}
      {/* ==== End ====  */}
    </div>
  );
};

export default Manage;
