const {ipcRenderer} = require('electron');
const CountdownTimer = require('./js/countdown_timer');
const CountdownControlPanel = require('./js/countdown_control_panel');

const timer = new CountdownTimer();
const control_panel = new CountdownControlPanel();

// Add play button to control panel
control_panel.addPlayButton();

// Listen for configTimer events, and update the timer with updated time.
ipcRenderer.on('configTimer', function(event, arg) {
	timer.pauseTimer();
	timer.setCountdownTime(Number(arg));
	timer.updateTimer();
});
