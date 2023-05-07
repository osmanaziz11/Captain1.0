import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript)</title>
      </Head>
      <div>
        <p className="">Hi</p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
}

export default Home;
