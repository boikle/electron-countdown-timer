const electron = require('electron');
const remote = electron.remote;
const set_timer_btn = document.getElementById('set_timer_btn');

// Add Event Handler for set timer button
set_timer_btn.addEventListener('click', function() {
	// close window
	let window = remote.getCurrentWindow();
	window.close();
});
