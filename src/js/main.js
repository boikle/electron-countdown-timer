const {app, BrowserWindow, dialog, Menu, ipcMain} = require('electron');

// Create the about window
function createAboutWindow() {
	let aboutWindow = new BrowserWindow({
		width: 300,
		height: 320,
		frame: true,
		alwaysOnTop: true,
		resizable: false,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Remove the menu
	aboutWindow.removeMenu();

	// Open devtools on start
	// aboutWindow.webContents.openDevTools();

	aboutWindow.loadFile('src/about.html');
}

// Create the config timer window
function createConfigWindow() {
	let configWindow = new BrowserWindow({
		width: 200,
		height: 100,
		frame: false,
		alwaysOnTop: true,
		resizable: false,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Open devtools on start
	// configWindow.webContents.openDevTools();

	configWindow.loadFile('src/config.html');
}

// Create the main countdown timer window
function createMainWindow () {
	// Create a browser window.
	let mainWindow = new BrowserWindow({
		width: 300,
		height: 180,
		icon: "src/imgs/icon.png",
		resizable: false,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Open devtools on start
	// mainWindow.webContents.openDevTools();

	// Load index.html file into electron browser window
	mainWindow.loadFile('src/index.html');

	// Inter Process Communication
	// Sends an configTimer event with the received argument
	ipcMain.on('configTimer', function(event, arg) {
		mainWindow.webContents.send('configTimer', arg);
	});

	// Open Config Window when openConfigWindow event is received.
	ipcMain.on('openConfigWindow', function() {
		createConfigWindow();
	});

	// Open warning dialog window with provided dialog options.
	ipcMain.on('warningDialog', function(event, dialogOptions) {
		dialog.showMessageBox(dialogOptions);
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
