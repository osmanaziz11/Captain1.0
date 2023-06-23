import { useState } from 'react';
import { useEffect } from 'react';

const BillRow = ({ item, setTotal }) => {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(item.salePrice);
  const [deleteItem, setDeleteItem] = useState(false);

  useEffect(() => {
    setPrice(counter * item.salePrice);
  }, [counter]);

  const totalBill = (opr) => {
    opr
      ? setTotal((curr) => curr + item.salePrice)
      : setTotal((curr) => (curr === 0.0 ? 0.0 : curr - item.salePrice));
  };
  useEffect(() => {
    totalBill(true);
  }, []);

  return (
    <tr className={`border-b border-b-[#272727] ${deleteItem && 'hidden'}`}>
      <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center itemName">
        {item.name}
      </td>
      <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center flex justify-between items-center itemQty">
        <span
          className="font-medium ms-3 bg-zinc-950 rounded shadow px-2 cursor-pointer"
          onClick={() => {
            setCounter((prevCounter) =>
              prevCounter === 1 ? prevCounter : prevCounter - 1
            );
            counter !== 1 && totalBill(false);
          }}
        >
          -
        </span>{' '}
        {counter}
        <span
          className="font-medium me-3 bg-zinc-950 rounded shadow px-2 cursor-pointer"
          onClick={() => {
            setCounter((prevCounter) =>
              Math.abs(item.quantity - item.sold) - 1 >= prevCounter
                ? prevCounter + 1
                : prevCounter
            );
            Math.abs(item.quantity - item.sold) - 1 >= counter &&
              totalBill(true);
          }}
        >
          +
        </span>
      </td>
      <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center itemPrice">
        {price}
      </td>
      <td
        class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center cursor-pointer"
        onClick={() => {
          setTotal((curr) => (curr === 0.0 ? 0.0 : curr - price));

          setDeleteItem(true);
        }}
      >
        Delete
      </td>
    </tr>
  );
};

export default BillRow;
