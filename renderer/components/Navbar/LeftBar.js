import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import NavIcons from './NavIcons';

const LeftBar = () => {
  const router = useRouter();
  const menu = [
    {
      icon: 'GameType',
      slug: '/',
    },
    {
      icon: 'Home',
      slug: '/home',
    },
    {
      icon: 'Manage',
      slug: '/manage',
    },
    {
      icon: 'Members',
      slug: '/pending',
    },
    {
      icon: 'Canteen',
      slug: '/canteen',
    },
    {
      icon: 'Expense',
      slug: '/expense',
    },
    {
      icon: 'Setting',
      slug: '/setting',
    },
  ];
  // non active color:: #707070
  return (
    <div className="nav bg-[#141414] w-[50px] h-screen absolute left-0 top-0 px-2 z-0">
      <ul className="  h-3/4 pt-14">
        {menu.map((item, idx) => {
          return (
            <Link href={item.slug} key={idx}>
              <li className="my-5 p-1 bg-[#272727] rounded cursor-pointer relative">
                {item.icon === 'Members' && (
                  <p className="absolute top-0 left-0 text-[8px] bg-red-600 w-[10px] flex justify-center items-center h-[10px] rounded-full text-white text-center"></p>
                )}
                <NavIcons
                  type={item.icon}
                  color={router.pathname === item.slug ? '#96A826' : '#707070'}
                />
              </li>
            </Link>
          );
        })}
      </ul>
      <ul className=" h-[25%] flex flex-col justify-end items-end  pb-4">
        <li className="p-1 bg-[#272727] rounded w-full mb-3">
          <img src={`/assets/setting.svg`} alt="" />
        </li>
        <Link href="/Login">
          <li className="p-1 bg-[#272727] rounded cursor-pointer">
            <img src={`/assets/logout.svg`} alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LeftBar;
