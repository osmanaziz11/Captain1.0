import { ipcMain } from 'electron';
import * as db from './db';
import path from 'path';
import fs from 'fs';

ipcMain.on('getAll', (event, data) => {
  db.fetchRecords(data)
    .then((rows) => {
      event.reply(`get_${data}`, rows);
    })
    .catch((err) => {
      event.reply(`get_${data}`, []);
    });
});

ipcMain.on('getMembers', (event) => {
  db.retrieveMembers()
    .then((rows) => {
      event.reply(`membersRetreival`, rows);
    })
    .catch((err) => {
      event.reply(`membersRetreival`, []);
    });
});

ipcMain.on('getHistory', (event, data) => {
  db.fetchRecord(data)
    .then((rows) => {
      event.reply(`get_memberHistory`, rows);
    })
    .catch((err) => {
      event.reply(`get_memberHistory`, []);
    });
});

ipcMain.on('insertRecord', async (event, data) => {
  try {
    await db.insertRecord(data);
    event.reply(`${data.tableName}Insert`, { status: 200 });
  } catch (err) {
    const status = JSON.parse(JSON.stringify(err)).errno == 19 ? 400 : 504;
    event.reply(`${data.tableName}Insert`, { status });
  }
});

ipcMain.on('updateRecord', async (event, data) => {
  try {
    await db.updateRecord(data);
    event.reply(`${data.tableName}Update`, { status: 200 });
  } catch (err) {
    event.reply(`${data.tableName}Update`, {
      status: 504,
      message: err.message,
    });
  }
});

ipcMain.on('updateItem', async (event, data) => {
  try {
    await db.updateItem(data);
    event.reply(`${data.tableName}Update`, { status: 200 });
  } catch (err) {
    console.log(err);
    event.reply(`${data.tableName}Update`, { status: 400 });
  }
});

ipcMain.on('updatePayingHistory', async (event, data) => {
  try {
    await db.updatePayingHistory(data);
    event.reply(`${data.tableName}Update`, { status: 200 });
  } catch (err) {
    console.log(err);
    event.reply(`${data.tableName}Update`, { status: 400 });
  }
});

ipcMain.on('delete', async (event, data) => {
  try {
    const resp = await db.deleteRecord(data);
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
