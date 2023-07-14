import React, { useEffect, useState } from 'react';
import Table from '../components/GameType/Table';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { ipcRenderer } from 'electron';

const Home = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    ipcRenderer.on('tablesEvent', (event, data) => {
      setTables(data);
    });
    ipcRenderer.send('getTables');
    return () => {};
  }, []);

  return (
    <Layout title="Game Type">
      <div className="w-full h-full  flex justify-between px-32 flex-wrap items-center pb-5 pt-3">
        {tables.length > 0 &&
          tables.map((table, idx) => {
            return <Table key={table.id} {...table} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
