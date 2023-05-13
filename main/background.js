import { createWindow } from './helpers';
import serve from 'electron-serve';
import { BrowserWindow, app } from 'electron';
const EventEmitter = require('events');
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const splashWin = createWindow('splash', {
    width: 700,
    height: 500,
    frame: false,
    show: true, // Show the splash window initially
  });
  const mainWindow = createWindow('main', {
    width: 700,
    height: 500,
    show: false,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];

    await mainWindow.loadURL(`http://localhost:${port}/home`);
    await splashWin.loadURL(`http://localhost:${port}/boarding`);
  }

  setTimeout(function () {
    splashWin.close();
    mainWindow.center();
    mainWindow.show();
  }, 5000);
})();

app.on('window-all-closed', () => {
  app.quit();
});
