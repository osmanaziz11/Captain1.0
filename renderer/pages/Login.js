import React, { useState, useEffect, useRef } from 'react';
import Trademark from '../public/assets/trademark.svg';
import AvatarBox from '../components/Login/AvatarBox';
import LoginForm from '../components/Login/LoginForm';
import Captain from '../public/assets/CAPTAIN.svg';
import version from '../public/assets/1.0.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  const [form, setForm] = useState(false);
  const router = useRouter();

  const roles = [{ role: 'admin' }, { role: 'user' }];

  const handleClick = () => {
    setForm(!form);
  };
  const handleRedirect = () => {
    router.replace('/');
  };
  useEffect(() => {}, []);

  return (
    <div className="w-full h-screen bg-[#141414] flex flex-col justify-center items-center opac  z-50">
      <div className="flex items-end  w-full justify-center ps-7">
        <Image src={Captain} className="ms-10" width={250} alt="title"></Image>
        <div className="mb-4 mx-3">
          <Image src={version} width={24} alt="title"></Image>
        </div>
      </div>

      {!form ? (
        <div className="w-full flex justify-center items-center my-20">
          {roles.map((role) => {
            return role.role === 'admin' ? (
              <AvatarBox avatar={role.role} handler={handleClick} />
            ) : (
              <Link href="/">
                <AvatarBox avatar={role.role} handler={handleRedirect} />
              </Link>
            );
          })}
        </div>
      ) : (
        <LoginForm handler={handleClick} />
      )}
      <div className="w-full flex justify-center items-center ">
        <div className="w-[160px] ">
          <Image src={Trademark} className="" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
