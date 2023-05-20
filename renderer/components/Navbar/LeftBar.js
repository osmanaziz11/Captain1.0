import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import NavIcons, { GameType, Home, Members, Manage, Canteen } from './NavIcons';

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
      slug: '/members',
    },
    {
      icon: 'Canteen',
      slug: '/canteen',
    },
  ];
  // non active color:: #707070
  return (
    <div className="nav bg-[#141414] w-[50px] h-screen absolute left-0 top-0 px-2">
      <ul className="  h-3/4 pt-14">
        {menu.map((item, idx) => {
          return (
            <Link href={item.slug} key={idx}>
              <li className="my-5 p-1 bg-[#272727] rounded cursor-pointer ">
                <NavIcons
                  type={item.icon}
                  color={router.pathname === item.slug ? '#96A826' : '#707070'}
                />
              </li>
            </Link>
          );
        })}
      </ul>
      <ul className=" h-[25%] flex justify-center items-end pb-10">
        <li className="p-1 bg-[#272727] rounded">
          <img src={`/assets/logout.svg`} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
