class CountdownTimer {
	constructor() {
		this.timer = document.getElementById('countdown_timer');
		this.remainingTime = 300; // 5 minutes

		document.addEventListener('startTimer', function() {
			console.log('Play button was pushed!');
		});

		// Update timer to display
		this.updateTimer();
	}

	convertSStoHHMMSS(totalsecs) {
		let hours = Math.floor(totalsecs / 3600);
		let minutes = Math.floor((totalsecs - (hours * 3600)) / 60);
		let seconds = Math.floor(totalsecs - (hours * 3600) - (minutes * 60));

		// Format hours, minutes, and seconds values for timer
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		return hours + ":" + minutes + ":" + seconds;
	}

	updateTimer() {
		let timerText = this.convertSStoHHMMSS(this.remainingTime);
		this.timer.textContent = timerText;
	}

	getCountdownTime() {
		return this.remainingTime;
	}

	setCountdownTime(secs) {
		if (typeof(secs) === 'number') {
			this.remainingTime = secs;
		}
	}
}

module.exports = CountdownTimer;
