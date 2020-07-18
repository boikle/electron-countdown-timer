const PlayButton = require('../controls/play_button');

// Class representing a coundown timer
class CountdownTimer {
	/**
	* Constructor for a countdown timer object.
	* @constructor
	*/
	constructor() {
		this.playBtn = new PlayButton();
		this.countdownInterval = null;
		let _this = this;
		this.timer = document.getElementById('countdown_timer');
		this.remainingTime = 900000; // 15 minutes in ms.

		document.addEventListener('startTimer', function() {
			_this.startTimer();
		});

		document.addEventListener('pauseTimer', function() {
			_this.pauseTimer();
		});

		// Update timer to display
		this.updateTimer();
	}

	/**
	* Start the countdown timer, updating the timer text 200 ms.
	*/
	startTimer() {
		let _this = this;
		let interval = 200; // milliseconds
		let endTime = Date.now() + (this.remainingTime);
		this.countdownInterval = window.setInterval(function() {
			let remainingTime = endTime - Date.now();
			if (remainingTime > 0) {
				_this.setCountdownTime(remainingTime);
				_this.updateTimer();
			} else {
				_this.setCountdownTime(0);
				_this.updateTimer();
				_this.pauseTimer();
				_this.playBtn.toggleState();
			}
		}, interval);
	}

	/**
	* Pause the countdown timer at it's current state.
	*/
	pauseTimer() {
		window.clearInterval(this.countdownInterval);
	}

	/**
	* Converts remaing time into a string used by the countdown timer
	* The countdown timer uses the format of HH:MM:SS.
	* @param {number} ms - The remaining time in milliseconds.
	* @return {string} - hh:mm:ss formatted string of the provided ms.
	*/
	convertMStoHHMMSS(ms) {
		let hh = Math.floor(ms / 3600000);
		let mm = Math.floor((ms - (hh * 3600000)) / 60000);
		let ss = Math.floor((ms - (hh * 3600000) - (mm * 60000)) / 1000);

		// Format hours, minutes, and seconds values for timer
		hh = hh < 10 ? "0" + hh : hh;
		mm = mm < 10 ? "0" + mm : mm;
		ss = ss < 10 ? "0" + ss : ss;

		return hh + ":" + mm + ":" + ss;
	}

	/**
	* Update the countdown timer textContent based on the remaing time value.
	*/
	updateTimer() {
		let timerText = this.convertMStoHHMMSS(this.remainingTime);
		this.timer.textContent = timerText;
	}

	/**
	* Get the remaining time on the countdown timer.
	* @return {number} remaining time in ms.
	*/
	getCountdownTime() {
		return this.remainingTime;
	}

	/**
	* Set the remaining time on the countdown timer.
	* @param {number} ms - Milliseconds
	*/
	setCountdownTime(ms) {
		if (typeof(ms) === 'number') {
			this.remainingTime = ms;
		}
	}

	/**
	* Get reference to the timer element
	* @returns timer element
	*/
	getTimer() {
		return this.timer;
	}
}

module.exports = CountdownTimer;
