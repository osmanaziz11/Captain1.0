import MemberHistoryModel from '../components/Models/MemberHistoryModel';
import PendingTable from '../components/Canteen/PendingTable';
import MemberModel from '../components/Models/MemberModel';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Searcher from '../components/Searcher';
import { getMembers } from '../redux/action';

const Pending = () => {
  const users = useSelector((state) => state.getMembers);
  const [historyPopup, setHistoryPopup] = useState(false);
  const [activeFilter, setActiveFilter] = useState(1);
  const [userPopup, setUserPopup] = useState(false);
  const [filters, setFilters] = useState([]);
  const [render, setRender] = useState(0);
  const dispatch = useDispatch();

  const opts = {
    setHistoryPopup,
    users: filters,
  };

  useEffect(() => {
    dispatch(getMembers());
  }, [render]);

  useEffect(() => {
    setFilters(users);
  }, [users]);

  useEffect(() => {
    if (activeFilter === 0) {
      const filterArray = users.filter((user) => user.balance === 0);
      setFilters(filterArray);
    }
    if (activeFilter === 1) {
      setFilters(users);
    }
    if (activeFilter === -1) {
      const filterArray = users.filter((user) => user.balance > 0);
      setFilters(filterArray);
    }
  }, [activeFilter]);

  return (
    <div className="canteen p-10 w-full h-full overflow-scroll">
      {userPopup && <MemberModel handler={setUserPopup} render={setRender} />}
      {historyPopup && (
        <MemberHistoryModel setMemberHistory={setHistoryPopup} />
      )}
      {/* ==== Button & Search ===== */}
      <div className="w-full h-[50px] flex">
        <div className=" w-1/4">
          <Searcher
            orgArr={users}
            activeFilter={activeFilter}
            setFilters={setFilters}
          />
        </div>
        <div className=" w-[60%] ps-2 flex">
          <div
            className={`${
              activeFilter === 1 ? 'bg-zinc-800' : 'bg-[#1b1b1b]'
            } ms-3 relative px-4  shadow-lg border-b-[#272727]  rounded flex justify-center items-center h-[40px] cursor-pointer`}
            onClick={() => setActiveFilter(1)}
          >
            <p className="text-gray-400 ">All</p>
          </div>
          <div
            className={`${
              activeFilter === 0 ? 'bg-zinc-800' : 'bg-[#1b1b1b]'
            } mx-3 relative px-3  shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[40px] cursor-pointer`}
            onClick={() => setActiveFilter(0)}
          >
            <p className="text-gray-400 "> Paid Amount</p>
          </div>
          <div
            className={`${
              activeFilter === -1 ? 'bg-zinc-800' : 'bg-[#1b1b1b]'
            } relative px-4 shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[40px] cursor-pointer `}
            onClick={() => setActiveFilter(-1)}
          >
            <p className="text-gray-400 "> Pending Amount</p>
          </div>
        </div>
        <div
          className="w-1/6 flex justify-end"
          onClick={() => setUserPopup(!userPopup)}
        >
          <div className=" relative w-40 shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[42px] cursor-pointer ">
            <p className="text-gray-400 text-2xl font-bold me-3 pb-1"> +</p>
            <p className="text-gray-400 "> Add Member</p>
          </div>
        </div>
      </div>
      {/* ==== End ===== */}

      {/* ====  Members Detail Window ===== */}
      <div className="w-full px-0 flex flex-wrap mt-5">
        <PendingTable {...opts} />
      </div>
      {/* ==== End ===== */}
    </div>
  );
};

export default Pending;
