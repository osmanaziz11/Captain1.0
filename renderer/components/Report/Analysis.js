import React from 'react';
import { Vertical } from './Layouts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as action from '../../redux/action';

export function CanteenAnaylsis() {
  const saleHistory = useSelector((state) => state.getSaleHistory);
  const items = useSelector((state) => state.getItems);
  const dispatch = useDispatch();

  const calculateInventory = () => {
    let amount = 0;
    items.forEach((element) => {
      amount += element.quantity * element.purchasePrice;
    });
    return amount;
  };

  const calculateSale = () => {
    let amount = 0;
    items.forEach((element) => {
      amount += element.sold * element.salePrice;
    });
    return amount;
  };

  const getMaxSold = (value) => {
    let amount = 0;
    saleHistory.forEach((row) => {
      if (value === row.name) amount += row.sold;
    });
    return amount;
  };

  const mostPopular = () => {
    let item = {
      sold: Number.MIN_VALUE,
    };
    saleHistory.forEach((row) => {
      const amount = getMaxSold(row.name);
      if (amount > item.sold) {
        item.sold = amount;
        item['name'] = row.name;
      }
    });
    return item;
  };

  useEffect(() => {
    dispatch(action.getItems());
    dispatch(action.getSaleHistory());
  }, []);

  useEffect(() => {
    calculateInventory();
    calculateSale();
  }, [items]);

  useEffect(() => {
    console.log(mostPopular());
    console.log(saleHistory);
  }, [saleHistory]);

  return <h1>Hi</h1>;
}

export function MembersAnaylsis() {
  //   return <Vertical />;
  return <h1>Hi</h1>;
}

export function ProfitAnaylsis() {
  return <h1>Hi</h1>;
}
