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
}

module.export = CountdownTimer;
