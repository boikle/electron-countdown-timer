/** Class representing the countdown timer's control panel */
class CountdownControlPanel {
	/**
	* Constructor for the Countdown Timer's Control Panel
	* @constructor
	*/
	constructor() {
		this.state = "off";
		this.playBtn;

		// Add play button
		this.addPlayButton();
	}

	// Get the current state of playBtn
	getState() {
		return this.state;
	}

	// Adds a play button to the control panel
	addPlayButton() {
		let _this = this;
		const panel = document.getElementById('countdown_control_panel');
		this.playBtn = document.createElement('div');
		this.playBtn.setAttribute('id', 'playbtn');
		this.playBtn.classList.remove('pause');
		this.playBtn.addEventListener('click', function() {
			_this.togglePlayButtonState();
		});

		panel.appendChild(this.playBtn);
	}

	// Helper function to perform toggle logic when play/pause button is clicked
	togglePlayButtonState() {
		let event;
		if (this.state === "off") {
			this.state = "on";
			this.playBtn.classList.add('pause');
			event = new CustomEvent("startTimer");
			document.dispatchEvent(event);

		} else {
			this.state = "off";
			this.playBtn.classList.remove('pause');
			event = new CustomEvent("pauseTimer");
			document.dispatchEvent(event);
		}
	}
}

module.exports = CountdownControlPanel;
