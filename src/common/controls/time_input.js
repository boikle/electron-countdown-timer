/**
* Helper function to create the DOM structure for a time input element.
* @param {object} opts - Options relating to the creation of a time input field.
*  - opts.id: the id for the element
*  - opts.name: the name attribute for the element
*  - opts.max: the max numeric value for the field.
* @returns inputField - An input element used to collect temporal values based
* on provided opts.
*/
exports.createTimeInput = function(opts) {
	let inputField, id, name, max;
	let placeholder = '00';
	let type = 'number';
	let min = '0';

	if (opts.id && typeof opts.id === 'string') {
		id = opts.id;
	} else {
		id = "";
	}

	if (opts.name && typeof opts.name === 'string') {
		name = opts.name;
	} else {
		name = "";
	}

	if (opts.max
		&& (typeof opts.max === 'string'
		|| typeof opts.max === 'number')) {
		max = String(opts.max);
	} else {
		max = "59";
	}

	inputField = document.createElement('input');
	inputField.setAttribute('id', id);
	inputField.setAttribute('type', type);
	inputField.setAttribute('name', name);
	inputField.setAttribute('placeholder', placeholder);
	inputField.setAttribute('max', max);
	inputField.setAttribute('min', min);

	return inputField;
};
