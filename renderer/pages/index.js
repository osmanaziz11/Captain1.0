import Table from '../components/GameType/Table';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const app = useSelector((curr) => curr.getPreferences);
  const router = useRouter();
  const tables = [
    { name: 'Victory Snooker ' },
    { name: 'Elite Cue' },
    { name: 'Prestige Billiards' },
    { name: 'Royal Champion' },
  ];

  useEffect(() => {
    if (app.role === '') router.replace('/Login');
    return () => {};
  }, [app]);

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
