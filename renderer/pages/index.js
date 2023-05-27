import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/GameType/Table';

const Home = () => {
  return (
    <Layout title="Game Type">
      <div className="w-full h-full  flex justify-between px-32 flex-wrap items-center pb-5 pt-3">
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    </Layout>
  );
};

export default Home;
