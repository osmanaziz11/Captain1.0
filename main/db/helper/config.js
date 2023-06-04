import { app } from 'electron';
import sqlite3 from 'sqlite3';
import path from 'path';

const appDirectory = app.getPath('userData');
const dbPath = path.join(appDirectory, '.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to database', err);
  } else {
    console.log('Connected to the database');
  }
});

export default db;
