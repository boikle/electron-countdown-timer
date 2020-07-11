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

/**
* Checks if the input fields contain valid numeric values. If invalid, user
* receives a warning message.
*
* Valid input ranges:
*  Hours must be between 0 - 23.
*  Minutes must be between 0 - 59.
*  Seconds must be between 0 - 59.
*/
function inputValidator() {
	let showWarning = false;
	let HH = document.getElementById('hh');
	let MM = document.getElementById('mm');
	let SS = document.getElementById('ss');

	if (Number(HH.value) > 23) {
		HH.value = 23;
		showWarning = true;
	} else if (Number(HH.value) < 0) {
		HH.value = 0;
		showWarning = true;
	}

	if (Number(MM.value) > 59) {
		MM.value = 59;
		showWarning = true;
	} else if (Number(MM.value) < 0) {
		MM.value = 0;
		showWarning = true;
	}

	if (Number(SS.value) > 59) {
		SS.value = 59;
		showWarning = true;
	} else if (Number(SS.value) < 0) {
		SS.value = 0;
		showWarning = true;
	}

	if (showWarning) {
		const dialogOptions = {
			type: 'warning',
			buttons: ['OK'],
			defaultId: 0,
			title: 'Invalid Input',
			message: 'Time inputs exceeded ranges.',
			detail: 'Hours must be between 0-23. \nMinutes must be between 0-59. \nSeconds must be between 0-59.'
		};

		// Request Main renderer to display warning dialog window.
		ipcRenderer.send('warningDialog', dialogOptions);
	}
}

// Add Event Handler for set timer button
set_timer_btn.addEventListener('click', function() {
	let config_window = remote.getCurrentWindow();

	// Validate Input values;
	inputValidator();

	// Convert input values to Milliseconds
	let MS = convertHHMMSSInputsToMS();

	// Send milliseconds value using inter process communication
	ipcRenderer.send('configTimer', MS.toString());

	// Close window
	config_window.close();
});
