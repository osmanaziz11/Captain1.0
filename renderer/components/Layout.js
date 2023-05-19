import Head from 'next/head';
import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full h-full">{children}</div>
    </>
  );
};

export default Layout;
