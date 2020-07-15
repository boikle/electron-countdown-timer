const {remote} = require('electron');
const ok_btn = document.getElementById('ok_btn');

// Add Event Handler for set timer button
ok_btn.addEventListener('click', function() {
	let about_window = remote.getCurrentWindow();

	// Close window
	about_window.close();
});
