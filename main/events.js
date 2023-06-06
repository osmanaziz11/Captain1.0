import { ipcMain } from 'electron';
import { app } from 'electron';
import fs from 'fs';
import path from 'path';

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
    console.log(err);
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

ipcMain.on('getThumbnails', (event) => {
  const appDirectory = app.getPath('userData');
  const folderPath = path.join(appDirectory, 'thumbnails');
  // Read the directory contents
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      // Handle error
      console.error(err);
      event.reply('thumbnailsData', { status: 0, message: err.message });
    } else {
      event.reply('thumbnailsData', { status: 1, content: files });
    }
  });
});
