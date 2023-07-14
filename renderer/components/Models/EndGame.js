import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getMembers } from '../../redux/action';
import { useForm } from 'react-hook-form';
import { currentDate } from '../../util/';
import { ipcRenderer } from 'electron';
import ThemeModel from './theme';
import short from 'short-uuid';

const EndGame = (props) => {
  const { setGameState: endGame, handler: closeModel, id: tableId } = props;
  const members = useSelector((state) => state.getMembers);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    trigger,
    formState: { errors },
  } = useForm();

  const validateInput = (event) => {
    setValue(event.target.name, event.target.value, {
      shouldValidate: true,
    });
  };

  const userDiscount = () => {
    ipcRenderer.send('getAll', 'discount');
    ipcRenderer.once('get_discount', (event, response) => {
      response.length > 0 && setDiscount(response[0].game);
    });
  };

  const success = () => {
    endGame(0);
    closeModel(false);
  };

  const updateRecord = () => {
    const payload = {
      tableName: 'gameExpenses',
      columns: {
        date: currentDate(),
        gameType: props.type,
        cash: parseInt(Math.abs(props.price - discount * props.price)),
        expense: parseInt(Math.abs(props.price - discount * props.price)),
      },
    };
    ipcRenderer.send('insertRecord', payload);
    ipcRenderer.send('updateRecord', {
      tableName: 'tables',
      columns: { status: 0 },
      condition: 'id',
      id: tableId,
    });
    ipcRenderer.once('gameExpensesInsert', (event, response) => {
      response.status == 200 && success();
    });
  };

  const submit = (data) => {
    const { phone, amount } = data;
    if (amount === '' && phone === '') setError('amount');
    if (
      parseInt(amount) !==
        parseInt(Math.abs(props.price - discount * props.price)) &&
      phone === ''
    ) {
      setError('amount');
      return;
    }

    // Non regular customer
    if (amount !== '' && phone === '') {
      updateRecord();
    }
    // Regular customer
    else if (phone !== '') {
      if (
        parseInt(amount) >
        parseInt(Math.abs(props.price - discount * props.price))
      ) {
        setError('amount');
        return;
      }

      const transId = short().new();
      ipcRenderer.send('insertRecord', {
        tableName: 'memberHistory',
        columns: {
          transId: transId,
          phoneNumber: phone,
          date: currentDate(),
          name: props.type,
          type: 'Game',
          price: parseInt(props.price),
          total: parseInt(Math.abs(props.price - props.price * discount)),
          paid: amount === '' ? 0 : parseInt(amount),
          balance: Math.abs(
            parseInt(amount) -
              parseInt(Math.abs(props.price - props.price * discount))
          ),
        },
      });

      ipcRenderer.send('updatePayingHistory', {
        tableName: 'payingHistory',
        columns: {
          date: currentDate(),
          balance: Math.abs(
            parseInt(amount) -
              parseInt(Math.abs(props.price - props.price * discount))
          ),
        },
        condition: 1,
        id: phone,
      });

      ipcRenderer.once('payingHistoryUpdate', (event, resp) => {
        resp.status == 200 && updateRecord();
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
        userDiscount();
        return true; // Member exists
      } else {
        setDiscount(0);
        return false; // Member does not exist
      }
    }
  };

  useEffect(() => {
    dispatch(getMembers());
    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  return (
    <ThemeModel title="Table Bill" handler={closeModel}>
      <div className={`my-3 flex z-50`}>
        <section className="w-full  mx-auto">
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden  bg-[#1b1b1b] md:rounded-t-lg">
                  <table className="min-w-full  border-[#272727]   shadow-lg">
                    <thead className="bg-[#252525]">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <button className="flex items-center gap-x-2 justify-center">
                              Game
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Frame
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Discount
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#1b1b1b] ">
                      <tr className="border-b border-b-[#272727]">
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ">
                          <div className="inline-flex items-center gap-x-3 justify-center">
                            {props.type}
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center font-medium">
                          {props.frame}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center font-medium">
                          Rs {props.price}{' '}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center font-medium">
                          Rs {props.price * discount}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center font-medium">
                          Rs {Math.abs(props.price - props.price * discount)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={`my-3 flex z-50`}>
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
        <div class="relative w-full  ">
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
      <div className="w-full my-3 flex justify-center items-center z-50">
        <button
          type="submit"
          onClick={handleSubmit(submit)}
          className="w-full text-white    outline-none  font-medium rounded text-sm px-5 py-2.5 text-center bg-[#22722E]"
        >
          Let's Pay
        </button>
      </div>
    </ThemeModel>
  );
};

export default EndGame;
