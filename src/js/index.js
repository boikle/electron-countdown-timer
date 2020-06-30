const CountdownTimer = require('./js/countdown_timer');
const CountdownControlPanel = require('./js/countdown_control_panel');

new CountdownTimer();

const control_panel = new CountdownControlPanel();

// Add play button to control panel
control_panel.addPlayButton();
