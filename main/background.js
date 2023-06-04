import { createWindow } from './helpers';
import serve from 'electron-serve';
import { app } from 'electron';
import { initDB } from './db';
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();
  initDB();
  const mainWindow = createWindow('main', {
    width: 700,
    height: 500,
    show: true,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    await mainWindow.loadURL(`http://localhost:8888/`);
  }

  mainWindow.center();
})();

app.on('window-all-closed', () => {
  app.quit();
});
