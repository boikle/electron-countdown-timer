const {app, BrowserWindow, Menu} = require('electron');

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
	win.loadFile('src/index.html');

	let menu = Menu.buildFromTemplate([
		{
			label: 'Menu',
			submenu: [
				{
					label: "Exit",
					click() {
						app.quit();
					}
				}
			]
		}
	]);

	Menu.setApplicationMenu(menu);
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

app.on('activate', () => {
	// In macOs, recreate a window if the dock icon is clicked and there are
	// no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
