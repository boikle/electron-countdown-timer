const {app, BrowserWindow} = require('electron');

function createWindow () {
	// Create a browser window.
	let win = new BrowserWindow({
		width: 600,
		height: 400,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Load index.html file into electron browser window
	win.loadFile('src/html/index.html');

	// Set win to null upon close
	win.on('closed', () => {
		win = null;
	});
}

// When ready, create the app window
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
	// If the platform is not a mac, quit the app.
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

