const {ipcRenderer, remote} = require('electron');
const set_timer_btn = document.getElementById('set_timer_btn');

/**
* Convert Hours (HH), Minutes (MM), and Seconds (SS) values
* provided by config window input fields, and converts the combination
* to milliseconds.
* @returns MS - milliseconds
*/
function convertHHMMSSInputsToMS() {
	let MS;
	let HH = Number(document.getElementById('hh').value);
	let MM = Number(document.getElementById('mm').value);
	let SS = Number(document.getElementById('ss').value);

	MS = (HH * 3600000) + (MM * 60000) + (SS * 1000);
	return MS;
}

// Add Event Handler for set timer button
set_timer_btn.addEventListener('click', function() {
	let config_window = remote.getCurrentWindow();

	// Convert input values to Milliseconds
	let MS = convertHHMMSSInputsToMS();

	// Send milliseconds value using inter process communication
	ipcRenderer.send('configTimer', MS.toString());

	// Close window
	config_window.close();
});
