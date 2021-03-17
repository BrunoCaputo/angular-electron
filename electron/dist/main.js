"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.title = 'myApp';
// import {Socket} from 'net';
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
// let HOST: '127.0.0.1';
// let PORT: 6969;
var mainWindow;
// let client: Socket;
// client = net.connect(PORT, HOST);
// client.setEncoding("utf8");
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/angular-electron/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.webContents.openDevTools();
    // client.write("Conectado\n");
    mainWindow.on('closed', function () {
        mainWindow = null;
        // if (client !== null) {
        //     client.write('Desconectado\n');
        //     client.end();
        // }
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
// ipcMain.on('socket:send', (event, data) => {
//   // client.write(data + "\n");
// });
// client.on("data", data => {
//     console.log(data.toString());
//     client.write('return -> ' + data + '\n');
// });
// client.on('end', () => {
//     console.log("desconectado\n");
//     client = null;
//     app.quit();
// });
//# sourceMappingURL=main.js.map