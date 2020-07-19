const {ipcRenderer, remote} = require('electron');
const SetTimeWidget = require('../../common/controls/set_time_widget');
const ConvUtils = require('../../common/utils/convert');
const setTimerBtn = document.getElementById('set_timer_btn');

// Add set time widget
let set_time_widget = new SetTimeWidget();

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
		MM.value = 59;
		SS.value = 59;
		showWarning = true;
	} else if (Number(HH.value) < 0) {
		HH.value = 0;
		showWarning = true;
	}

	if (Number(MM.value) > 59) {
		MM.value = 59;
		SS.value = 59;
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
			detail: `Hours must be between 0-23.
				\nMinutes must be between 0-59.
				\nSeconds must be between 0-59.`
		};

		// Request Main renderer to display warning dialog window.
		ipcRenderer.send('warningDialog', dialogOptions);
	}
}

// Add Event Handler for set timer button
setTimerBtn.addEventListener('click', function() {
	let config_window = remote.getCurrentWindow();

	// Validate Input values;
	inputValidator();

	// Convert input values to Milliseconds
	let HH = set_time_widget.getHours();
	let MM = set_time_widget.getMinutes();
	let SS = set_time_widget.getSeconds();
	let MS = ConvUtils.convertHHMMSSToMS(HH,MM,SS);

	// Send milliseconds value using inter process communication
	ipcRenderer.send('configTimer', MS.toString());

	// Close window
	config_window.close();
});
