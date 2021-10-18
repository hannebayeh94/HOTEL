import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow = null;

const createWindow = () => {

  win = new BrowserWindow({
    height: 577,
    width: 777
  });

  win.on('closed', () => {
    win = null;
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/../../dist/hotel/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
