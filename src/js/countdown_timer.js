class CountdownTimer {
	constructor() {
		this.remainingTime = 300; // 5 minutes
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
		const timer = document.getElementById('countdown_timer');
		timer.textContent = "00:05:00";
	}
}

module.exports = CountdownTimer;
