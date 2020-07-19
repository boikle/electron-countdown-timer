const {ipcRenderer, remote} = require('electron');
const SetTimeWidget = require('../../common/controls/set_time_widget');
const ConvUtils = require('../../common/utils/convert');
const setTimerBtn = document.getElementById('set_timer_btn');

// Add set time widget
let set_time_widget = new SetTimeWidget();

// Add Event Handler for set timer button
setTimerBtn.addEventListener('click', function() {
	let config_window = remote.getCurrentWindow();

	// Check if Input values were valid, and if not, report to user;
	if (!set_time_widget.validTimeInputs()) {
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
