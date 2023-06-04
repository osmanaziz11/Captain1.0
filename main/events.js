import { ipcMain } from 'electron';
import { fetchRecords, insertRecord } from './db';

ipcMain.on('getAll', (event, data) => {
  fetchRecords(data)
    .then((rows) => {
      event.reply(`get_${data}`, rows);
    })
    .catch((err) => {
      event.reply(`get_${data}`, []);
    });
});

ipcMain.on('insert', async (event, data) => {
  try {
    const resp = await insertRecord(data);
    // console.log(`resp ${resp}`);
    event.reply(`insert_${data.tableName}`, { status: 1 });
  } catch (err) {
    const msg =
      JSON.parse(JSON.stringify(err)).errno == 19
        ? 'Category already exist'
        : '';
    event.reply(`insert_${data.tableName}`, { status: 0, message: msg });
  }
});
