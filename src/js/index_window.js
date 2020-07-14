const {ipcRenderer} = require('electron');
const CountdownTimer = require('./js/countdown_timer');

const timer = new CountdownTimer();
let timerElem = timer.getTimer();

// Listen to click events to open the config window for the timer.
timerElem.addEventListener('click', function() {
	ipcRenderer.send('openConfigWindow', null);
});

// Listen for configTimer events, and update the timer with updated time.
ipcRenderer.on('configTimer', function(event, arg) {
	timer.pauseTimer();
	if (timer.controlPanel.getState() === "on") {
		timer.controlPanel.togglePlayButtonState();
	}
	timer.setCountdownTime(Number(arg));
	timer.updateTimer();
});
