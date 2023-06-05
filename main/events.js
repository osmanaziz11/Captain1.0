import { ipcMain } from 'electron';
import { deleteRecord, fetchRecords, insertRecord } from './db';

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
      JSON.parse(JSON.stringify(err)).errno == 19 ? 'Already exist' : '';
    event.reply(`insert_${data.tableName}`, { status: 0, message: msg });
  }
});

ipcMain.on('delete', async (event, data) => {
  try {
    const resp = await deleteRecord(data);
    // console.log(`resp ${resp}`);
    event.reply(`delete_${data.tableName}`, { status: 1 });
  } catch (err) {
    console.log(err);
    const msg = event.reply(`delete_${data.tableName}`, {
      status: 0,
      message: '',
    });
  }
});
