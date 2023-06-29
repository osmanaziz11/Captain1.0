import MemberHistoryModel from '../components/Models/MemberHistoryModel';
import PendingTable from '../components/Canteen/PendingTable';
import MemberModel from '../components/Models/MemberModel';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Search from '../components/Canteen/Search';
import { getMembers } from '../redux/action';

const Pending = () => {
  const members = useSelector((state) => state.getMembers);

  const [memberModel, setMemberModel] = useState(false);
  const [memberHistory, setMemberHistory] = useState(false);
  const [filters, setFilters] = useState([]);
  const [render, setRender] = useState(0);

  const filterMembers = () => {
    //  const filterArr = members.filter((user) => user.category === data.name);
    //  filters(filterArr);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [render]);

  return (
    <div className="canteen p-10 w-full h-full overflow-scroll">
      {memberModel && (
        <MemberModel handler={setMemberModel} render={setRender} />
      )}
      {memberHistory && (
        <MemberHistoryModel setMemberHistory={setMemberHistory} />
      )}
      {/* ==== Button & Search ===== */}
      <div className="w-full h-[50px] flex">
        <div className=" w-1/4">
          <Search />
        </div>
        <div className=" w-[60%] ps-2 flex">
          <div
            className="ms-3 relative px-4  shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[40px] cursor-pointer"
            onClick={filterMembers}
          >
            <p className="text-gray-400 ">All</p>
          </div>
          <div
            className="mx-3 relative px-3  shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[40px] cursor-pointer"
            onClick={filterMembers}
          >
            <p className="text-gray-400 "> Paid Amount</p>
          </div>
          <div className=" relative px-4 shadow-lg border-b-[#272727] bg-[#1b1b1b] rounded flex justify-center items-center h-[40px] cursor-pointer ">
            <p className="text-gray-400 "> Pending Amount</p>
          </div>
        </div>
        <div
          className="w-1/6 flex justify-end"
          onClick={() => setMemberModel(!memberModel)}
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
        <PendingTable data={members} setMemberHistory={setMemberHistory} />
      </div>
      {/* ==== End ===== */}
    </div>
  );
};

export default Pending;
