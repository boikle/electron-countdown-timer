const {app, BrowserWindow, Menu, ipcMain} = require('electron');

function createAboutWindow() {
	let aboutWindow = new BrowserWindow({
		width: 300,
		height: 300,
		frame: false,
		alwaysOnTop: true,
		webPreferences: {
			nodeIntegration: true
		}
	});
	aboutWindow.loadFile('src/about.html');
}

function createConfigWindow() {
	let configWindow = new BrowserWindow({
		width: 200,
		height: 100,
		frame: false,
		alwaysOnTop: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Open devtools on start
	//configWindow.webContents.openDevTools();

	configWindow.loadFile('src/config.html');
}

function createMainWindow () {
	// Create a browser window.
	let mainWindow = new BrowserWindow({
		width: 400,
		height: 200,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Open devtools on start
	//mainWindow.webContents.openDevTools();

	// Load index.html file into electron browser window
	mainWindow.loadFile('src/index.html');

	// Inter Process Communication
	// Sends an configTimer event with the received argument
	ipcMain.on('configTimer', function(event, arg) {
		mainWindow.webContents.send('configTimer', arg);
	});

	// Define the main window's menu bar
	let menu = Menu.buildFromTemplate([
		{
			label: 'Menu',
			submenu: [
				{
					label: "Configure Timer",
					click() {
						createConfigWindow();
					}
				},
				{
					label: "Exit",
					click() {
						app.quit();
					}
				}
			]
		},
		{
			label: 'Help',
			submenu: [
				{
					label: "About",
					click() {
						createAboutWindow();
					}
				}
			]
		}
	]);

	Menu.setApplicationMenu(menu);
}

// When ready, create the app window
app.whenReady().then(createMainWindow);

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
		createMainWindow();
	}
});
