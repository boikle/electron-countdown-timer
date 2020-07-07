const {ipcRenderer} = require('electron');
const CountdownTimer = require('./js/countdown_timer');

const timer = new CountdownTimer();

// Listen for configTimer events, and update the timer with updated time.
ipcRenderer.on('configTimer', function(event, arg) {
	timer.pauseTimer();
	timer.controlPanel.togglePlayButtonState();
	timer.setCountdownTime(Number(arg));
	timer.updateTimer();
});
