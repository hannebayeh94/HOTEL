"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win = null;
var createWindow = function () {
    win = new electron_1.BrowserWindow({
        height: 577,
        width: 777
    });
    win.on('closed', function () {
        win = null;
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/../../dist/hotel/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.webContents.openDevTools();
};
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main.js.map