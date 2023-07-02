import React, { useEffect } from 'react';
import ExpenseTable from '../components/Expense/ExpenseTable';
import ExpenseModel from '../components/Models/ExpenseModel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getExpense } from '../redux/action';

const Expense = () => {
  const [model, setModel] = useState(false);
  const [render, setRender] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpense());
  }, []);

  return (
    <div className="canteen p-10 w-full h-full overflow-scroll">
      {model && <ExpenseModel handler={setModel} render={setRender} />}

      {/* ==== Button & Search ===== */}
      <div className="w-full h-[50px] flex">
        <div className="w-full flex justify-end" onClick={() => setModel(true)}>
          <div className=" relative w-40 shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[42px] cursor-pointer ">
            <p className="text-gray-400 text-2xl font-bold me-3 pb-1"> +</p>
            <p className="text-gray-400 "> Add Expense</p>
          </div>
        </div>
      </div>
      {/* ==== End ===== */}

      {/* ====  Members Detail Window ===== */}
      <div className="w-full px-0 flex flex-wrap mt-5">
        <ExpenseTable />
      </div>
      {/* ==== End ===== */}
    </div>
  );
};

export default Expense;
