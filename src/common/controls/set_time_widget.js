const timeInput = require('./time_input');

// Class for creating a set time widget used for configuring the timer's value.
class SetTimeWidget {
	/**
	* Creates set time widget with initialized values.
	* @constructor
	*/
	constructor() {
		// Create the hours time input element
		this.hhInput = timeInput.createTimeInput({
			id: 'hh',
			name: 'hours',
			max: '23'
		});

		// Create the minutess time input element
		this.mmInput = timeInput.createTimeInput({
			id: 'mm',
			name: 'minutes',
			max: '59'
		});

		// Create the seconds time input element
		this.ssInput = timeInput.createTimeInput({
			id: 'ss',
			name: 'seconds',
			max: '59'
		});

		this.addSetTimeWidget();
	}

	getHours() {
		return Number(this.hhInput.value);
	}

	getMinutes() {
		return Number(this.mmInput.value);
	}

	getSeconds() {
		return Number(this.ssInput.value);
	}

	// Add the set time widget to the #set_time_widget div
	addSetTimeWidget() {
		const widget = document.getElementById('set_time_widget');

		// Add hours input
		widget.appendChild(this.hhInput);

		// Add column label
		let hhmmColon = document.createElement('label');
		hhmmColon.classList.add('colon');
		hhmmColon.textContent = ' : ';
		widget.appendChild(hhmmColon);

		// Add minutes input
		widget.appendChild(this.mmInput);

		// Add column label
		let mmssColon = document.createElement('label');
		mmssColon.classList.add('colon');
		mmssColon.textContent = ' : ';
		widget.appendChild(mmssColon);

		// Add seconds input
		widget.appendChild(this.ssInput);
	}
}

module.exports = SetTimeWidget;
