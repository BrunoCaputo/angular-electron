process.title = 'myApp';

// import {Socket} from 'net';
import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

// let HOST: '127.0.0.1';
// let PORT: 6969;

let mainWindow: BrowserWindow;
// let client: Socket;
// client = net.connect(PORT, HOST);

// client.setEncoding("utf8");

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.webContents.openDevTools();
  // client.write("Conectado\n");

  mainWindow.on('closed', () => {
    mainWindow = null;
    // if (client !== null) {
    //     client.write('Desconectado\n');
    //     client.end();
    // }
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
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
