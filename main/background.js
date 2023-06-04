import { createWindow } from './helpers';
import serve from 'electron-serve';
import { screen } from 'electron';
import { app } from 'electron';
import { initDB } from './db';
import './events';

const isProd = process.env.NODE_ENV === 'production';
let isContentLoaded = false;

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = createWindow('main', {
    minWidth: width,
    minHeight: height,
    show: false,
  });

  const splashWindow = createWindow('splash', {
    width: 700,
    height: 500,
    show: false,
    frame: false,
    backgroundColor: '#141414',
  });

  const showMainWindow = () => {
    if (isContentLoaded) {
      splashWindow.show();
    }
  };

  splashWindow.webContents.on('did-finish-load', () => {
    isContentLoaded = true;
    showMainWindow();
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    splashWindow.loadURL('http://localhost:8888/splash');
    mainWindow.loadURL(`http://localhost:8888/`);
  }

  setTimeout(() => {
    splashWindow.webContents.send('isLoading', 30);
    initDB()
      .then(() => {
        splashWindow.webContents.send('isLoading', 100);
        setTimeout(() => {
          splashWindow.hide();
          mainWindow.show();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      splashWindow.webContents.send('isLoading', 70);
    }, 2000);
  }, 5000);
  mainWindow.webContents.openDevTools();
})();

app.on('window-all-closed', () => {
  app.quit();
});
