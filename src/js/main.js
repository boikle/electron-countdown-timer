const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create a browser window.
  let win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Load index.html file into electron browser window
  win.loadFile('src/html/index.html');
}

app.whenReady().then(createWindow);


