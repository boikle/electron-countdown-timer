/** Class representing the countdown timer's control panel */
class CountdownControlPanel {
	/**
	* Constructor for the Countdown Timer's Control Panel
	* @constructor
	*/
	constructor() {
		this.state = "off";
		this.playBtn;
	}

	/**
	* Adds a play button to the control panel
	*/
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

	/**
	* Helper function to perform toggle logic when play/pause button is clicked
	*/
	togglePlayButtonState() {
		let event;
		if (this.state === "off") {
			event = new CustomEvent("startTimer");
			document.dispatchEvent(event);
			this.state = "on";
			this.playBtn.classList.add('pause');

		} else {
			event = new CustomEvent("pauseTimer");
			document.dispatchEvent(event);
			this.state = "off";
			this.playBtn.classList.remove('pause');
		}
	}
}

module.exports = CountdownControlPanel;
