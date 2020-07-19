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

	/**
	* Checks if the input fields contain valid numeric values.
	*
	* Valid input ranges:
	*  Hours must be between 0 - 23.
	*  Minutes must be between 0 - 59.
	*  Seconds must be between 0 - 59.
	* @returns {boolean} - true if valid, false if not valid.
	*/
	validTimeInputs() {
		let valid = true;

		if (this.getHours() > 23) {
			this.hhInput.value = 23;
			this.mmInput.value = 59;
			this.ssInput.value = 59;
			valid = false;
		} else if (this.getHours() < 0) {
			this.hhInput.value = 0;
			valid = false;
		}

		if (this.getMinutes() > 59) {
			this.mmInput.value = 59;
			this.ssInput.value = 59;
			valid = false;
		} else if (this.getMinutes() < 0) {
			this.mmInput.value = 0;
			valid = false;
		}

		if (this.getSeconds() > 59) {
			this.ssInput.value = 59;
			valid = false;
		} else if (this.getSeconds() < 0) {
			this.ssInput.value = 0;
			valid = false;
		}

		return valid;
	}
}

module.exports = SetTimeWidget;
