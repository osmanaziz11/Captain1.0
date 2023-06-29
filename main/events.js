import { ipcMain } from 'electron';
import { app } from 'electron';
import path from 'path';
import fs from 'fs';

import {
  deleteRecord,
  fetchRecord,
  fetchRecords,
  insertRecord,
  updateItems,
  updateRecord,
} from './db';

ipcMain.on('getAll', (event, data) => {
  fetchRecords(data)
    .then((rows) => {
      event.reply(`get_${data}`, rows);
    })
    .catch((err) => {
      event.reply(`get_${data}`, []);
    });
});

ipcMain.on('getHistory', (event, data) => {
  fetchRecord(data)
    .then((rows) => {
      event.reply(`get_memberHistory`, rows);
    })
    .catch((err) => {
      event.reply(`get_memberHistory`, []);
    });
});

ipcMain.on('insert', async (event, data) => {
  try {
    const resp = await insertRecord(data);
    event.reply(`insert_${data.tableName}`, { status: 1 });
  } catch (err) {
    console.log(err);
    const msg =
      JSON.parse(JSON.stringify(err)).errno == 19 ? 'Already exist' : '';
    event.reply(`insert_${data.tableName}`, { status: 0, message: msg });
  }
});

ipcMain.on('updateRecord', async (event, data) => {
  try {
    await updateRecord(data);
    event.reply(`${data.tableName}Update`, { status: 200 });
  } catch (err) {
    event.reply(`${data.tableName}Update`, {
      status: 504,
      message: err.message,
    });
  }
});

ipcMain.on('update', async (event, data) => {
  try {
    const resp = await updateItems(data);
    event.reply(`update_${data.tableName}`, { status: 1 });
  } catch (err) {
    console.log(err);
    // const msg =
    //   JSON.parse(JSON.stringify(err)).errno == 19 ? 'Already exist' : '';
    event.reply(`update_${data.tableName}`, { status: 0, message: '' });
  }
});

ipcMain.on('delete', async (event, data) => {
  try {
    const resp = await deleteRecord(data);
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
  const folderPath = path.join(
    __dirname,
    '..',
    'renderer',
    'public',
    'assets',
    'items'
  );

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    event.reply('thumbnailsData', { status: 400, message: 'Folder created.' });
  } else {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.log(err);
        event.reply('thumbnailsData', { status: 504, message: err.message });
      } else {
        files.length > 0
          ? event.reply('thumbnailsData', { status: 200, content: files })
          : event.reply('thumbnailsData', {
              status: 400,
              message: 'No files.',
            });
      }
    });
  }
});
