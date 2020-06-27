const CountdownTimer = require('./js/countdown_timer');
const CountdownControlPanel = require('./js/countdown_control_panel');

const timer = new CountdownTimer();
timer.updateCountdownDisplay();

const control_panel = new CountdownControlPanel();

// Add play button to control panel
control_panel.addPlayButton();
