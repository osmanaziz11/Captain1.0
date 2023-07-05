import Table from '../components/GameType/Table';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ipcRenderer } from 'electron';

const Home = () => {
  const app = useSelector((curr) => curr.getPreferences);
  const [tables, setTables] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (app.role === '') router.replace('/Login');
    ipcRenderer.on('get_tables', (event, data) => {
      setTables(data);
    });
    ipcRenderer.send('getAll', 'tables');
    return () => {};
  }, [app]);

  return (
    <Layout title="Game Type">
      <div className="w-full h-full  flex justify-between px-32 flex-wrap items-center pb-5 pt-3">
        {tables.length > 0 &&
          tables.map((table, idx) => {
            return (
              <Table
                key={idx}
                name={table.name}
                status={table.status}
                game={table.gameId}
              />
            );
          })}
      </div>
    </Layout>
  );
};

export default Home;
