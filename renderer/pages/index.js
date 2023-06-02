import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/GameType/Table';

const Home = () => {
  const tables = [
    { name: 'Victory Snooker ' },
    { name: 'Elite Cue' },
    { name: 'Prestige Billiards' },
    { name: 'Royal Champion' },
  ];
  return (
    <Layout title="Game Type">
      <div className="w-full h-full  flex justify-between px-32 flex-wrap items-center pb-5 pt-3">
        {tables.length > 0 &&
          tables.map((table, idx) => {
            return <Table key={idx} name={table.name} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
