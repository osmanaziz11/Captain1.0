import { getMembers, resetCart } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import TableBill from '../Canteen/TableBill';
import { useForm } from 'react-hook-form';
import { currentDate } from '../../util/';
import BillRow from '../Canteen/BillRow';
import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron';
import Currency from '../Currency';
import { useState } from 'react';
import ThemeModel from './theme';
import { useRef } from 'react';
import short from 'short-uuid';

const Cart = ({ handler, render }) => {
  const [billType, setBillType] = useState(false);
  const [status, setStatus] = useState(true);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const itemsRef = useRef(null);

  const cartItems = useSelector((item) => item.getCartItems);
  const members = useSelector((state) => state.getMembers);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    trigger,
    formState: { errors },
  } = useForm();

  let isTrue = 0;

  // Renderer events
  ipcRenderer.once('itemsUpdate', (event, data) => {
    if (data.status === 200) resetDefault('');
    isTrue += 1;
  });

  ipcRenderer.once('memberHistoryInsert', (event, data) => {
    if (data.status === 200) {
      isTrue += 1;
    }
  });

  ipcRenderer.once('payingHistoryUpdate', (event, data) => {
    if (data.status === 200 && isTrue == 2) {
      resetDefault('');
    }
  });

  //  User-defined functions
  const validateInput = (event) => {
    setValue(event.target.name, event.target.value, {
      shouldValidate: true,
    });
  };

  const resetDefault = (value) => {
    dispatch(resetCart());
    handler(false);
    render(Math.round(Math.random() * 100));
  };

  const updateInventory = (data) => {
    data.map((item, idx) => {
      try {
        ipcRenderer.send('updateItem', {
          tableName: 'items',
          columns: {
            name: item.name,
            quantity: item.quantity,
          },
        });
        ipcRenderer.send('insertRecord', {
          tableName: 'saleHistory',
          columns: {
            name: item.name,
            date: currentDate(),
            sold: parseInt(item.quantity.split(' ')[1][0]),
          },
        });
      } catch (error) {}
    });
  };

  const submit = (data) => {
    const { phone, amount } = data;
    if (amount === '' && phone === '') setError('amount');
    if (parseInt(amount) !== parseInt(total) && phone === '') {
      setError('amount');
      return;
    }
    const rows = Array.from(
      itemsRef.current.querySelectorAll('tr:not(.hidden)')
    );
    const rowData = rows.map((row) => {
      const name = row.querySelector('.itemName').textContent;
      const priceArr = cartItems.filter((curr) => curr.name == name);
      const price = priceArr[0].salePrice;
      const quantity = row.querySelector('.itemQty').textContent;
      return {
        name,
        quantity,
        price,
      };
    });

    // Non regular customer
    if (amount !== '' && phone === '') {
      updateInventory(rowData);
    }
    // Regular customer
    else if (phone !== '') {
      updateInventory(rowData);
      const transId = short().new();
      rowData.map((item, idx) =>
        ipcRenderer.send('insertRecord', {
          tableName: 'memberHistory',
          columns: {
            transId: transId,
            phoneNumber: phone,
            date: currentDate(),
            name: item.name,
            type: 'Canteen',
            price: `${item.quantity.split(' ')[1][0]}/${item.price}`,
            total: parseInt(item.quantity.split(' ')[1][0]) * item.price,
            paid: amount === '' ? 0 : parseInt(amount),
            balance: Math.abs(amount - total),
          },
        })
      );

      ipcRenderer.send('updatePayingHistory', {
        tableName: 'payingHistory',
        columns: {
          date: currentDate(),
          balance: Math.abs(amount - total),
        },
        condition: 1,
        id: phone,
      });
    }
  };

  const isMemberExist = (event) => {
    if (event !== '') {
      const member = members.filter(
        (member) =>
          member.phoneNumber.slice(member.phoneNumber.indexOf('3')) ===
          event.slice(event.indexOf('3'))
      );
      if (member.length > 0) {
        return true; // Member exists
      } else {
        return false; // Member does not exist
      }
    }
  };

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  return (
    <ThemeModel title="Canteen Bill" handler={resetDefault}>
      <div className="max-h-52 overflow-auto ">
        {/* ==== Items in cart ==== */}
        <table className="min-w-full  border-[#272727]   shadow-lg ">
          <thead className="bg-[#252525]  rounded">
            <tr>
              <th
                scope="col"
                class="px-4 py-2 text-sm font-medium text-center rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Item Name
              </th>

              <th
                scope="col"
                class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Quantity
              </th>

              <th
                scope="col"
                class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Price
              </th>
              <th
                scope="col"
                class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody ref={itemsRef} className="bg-[#1b1b1b]  ">
            {/* Max five rows   */}
            {cartItems.map((item, idx) => {
              return <BillRow key={idx} item={item} setTotal={setTotal} />;
            })}
          </tbody>
        </table>
      </div>
      {/* End  */}

      {/* ==== Total Bill ==== */}
      <table className="min-w-full  border-[#272727]   shadow-lg ">
        <thead class="bg-red-700">
          <tr>
            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Total
            </th>

            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Discount
            </th>

            <th
              scope="col"
              class="px-4 py-2 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Sub Total
            </th>
          </tr>
        </thead>
        <tbody class="bg-[#1b1b1b] ">
          <tr className="border-b border-b-[#272727]">
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              <Currency amount={total} />
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              <input
                type="number"
                name=""
                id=""
                className={`bg-zinc-800 rounded shadow p-1 border-none text-center outline-none ${
                  !errors.phone ? 'disabled' : ''
                }`}
                disabled={status}
                placeholder="Rs/-"
              />
            </td>
            <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
              <Currency amount={total} />
            </td>
          </tr>
        </tbody>
      </table>
      {/* End  */}

      {/* ==== Bill Type Options ====  */}
      {total !== 0.0 && (
        <div className={`flex w-full justify-center items-center my-2`}>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="mr-2">
              <a
                href="#"
                class={`inline-block px-4 py-1 text-white ${
                  !billType ? 'bg-zinc-950' : 'bg-zinc-800'
                } rounded active cursor-pointer`}
                onClick={() => setBillType(false)}
              >
                Walk In
              </a>
            </li>
            <li class="mr-2">
              <a
                class={`inline-block px-4 py-1 text-white ${
                  billType ? 'bg-zinc-950' : 'bg-zinc-800'
                } rounded active cursor-pointer`}
                onClick={() => setBillType(true)}
              >
                Table
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* End  */}

      {total !== 0.0 && (
        <form action="" className="w-full">
          {/* ==== Walk In ==== */}
          {!billType && (
            <div className={`my-3 flex  `}>
              <div class="relative w-full  pe-2">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="m8.92 13.67l-1.61-1.53l-1.5-1.42l2-.29l2.25-.32l.29-.57h-.02a1 1 0 0 1-.979-.794c-.001-.617.799-.417 1.429-1.457c.08-.02 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c.63 1 1.44.85 1.43 1.45s-.74.8-1.43.87C4 9.719 3 9.459 2 11.349c-.6 1.09-.85 4.65-.85 4.65h7.36v-.17zm2.8 2.33h.56l-.28-.14l-.28.14z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 14.73L14.47 16L14 13.31l2-1.9l-2.76-.39L12 8.57l-1.24 2.45l-2.76.39l2 1.9L9.53 16L12 14.73z"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  id="voice-search"
                  class={`outline-none ${
                    errors.phone && 'border-red-600 border'
                  } bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5    placeholder-gray-400 `}
                  placeholder="Customer phone number"
                  {...register('phone', {
                    onChange: (e) => {
                      validateInput(e);
                      trigger('phone'); // Trigger validation for the 'phone' field manually
                    },
                    validate: isMemberExist,
                  })}
                />
              </div>
              <div class="relative w-full  pe-2">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 6h18v12H3V6m9 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M7 8a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2H7Z"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  class={`outline-none ${
                    errors.amount && 'border-red-600 border'
                  } bg-[#1b1b1b] text-gray-400 text-sm rounded-sm block w-full pl-10 p-2.5    placeholder-gray-400 `}
                  placeholder="Received amount"
                  {...register('amount', {})}
                />
              </div>
            </div>
          )}
          {/* End  */}

          {/* ==== Table ==== */}
          {billType && <TableBill />}
          {/* End  */}

          <div className="w-full my-3 flex justify-center items-center">
            <button
              type="submit"
              onClick={handleSubmit(submit)}
              class={`w-full text-white bg-[#1b1b1b] shadow-md  outline-none  font-medium rounded text-sm px-5 py-2.5 text-center ${
                errors.phone
                  ? 'bg-[#1b1b1b] opacity-50 cursor-default'
                  : 'bg-[#22722E]'
              }`}
            >
              Let's Pay
            </button>
          </div>
        </form>
      )}
    </ThemeModel>
  );
};

export default Cart;
