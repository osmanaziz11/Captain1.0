import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const LeftBar = () => {
  const router = useRouter();
  const { slug } = router.query;
  const menu = [
    {
      icon: 'snooker.svg',
      slug: '/',
    },
    {
      icon: 'home.svg',
      slug: '/home',
    },
    {
      icon: 'manage.svg',
      slug: '/manage',
    },
    {
      icon: 'team.svg',
      slug: '/members',
    },
    {
      icon: 'canteen.svg',
      slug: '/canteen',
    },
  ];
  return (
    <div className="nav bg-[#141414] w-[50px] h-screen absolute left-0 top-0 px-2">
      <ul className="  h-3/4 pt-14">
        {menu.map((item, idx) => {
          return (
            <li
              key={idx}
              className="my-5 p-1 bg-[#272727] rounded cursor-pointer text-red-900"
            >
              <Link href={item.slug}>
                <img
                  src={`/assets/${item.icon}`}
                  alt=""
                  className=" text-white"
                />
              </Link>
            </li>
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
