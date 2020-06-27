class CountdownTimer {
	constructor() {
		this.timer = document.getElementById('countdown_timer');
		this.remainingTime = 300; // 5 minutes

		document.addEventListener('startTimer', function() {
			console.log('Play button was pushed!');
		});
	}

	getCountdownTime() {
		return this.remainingTime;
	}

	setCountdownTime(secs) {
		if (typeof(secs) === 'number') {
			this.remainingTime = secs;
		}
	}

	updateCountdownDisplay() {
		this.timer.textContent = "00:05:00";
	}
}

module.exports = CountdownTimer;
