/**
* Converts remaing time into a string used by the countdown timer
* The countdown timer uses the format of HH:MM:SS.
* @param {number} ms - The remaining time in milliseconds.
* @return {string} - hh:mm:ss formatted string of the provided ms.
*/
exports.convertMStoHHMMSS = function(ms) {
	let hh = Math.floor(ms / 3600000);
	let mm = Math.floor((ms - (hh * 3600000)) / 60000);
	let ss = Math.floor((ms - (hh * 3600000) - (mm * 60000)) / 1000);

	// Format hours, minutes, and seconds values for timer
	hh = hh < 10 ? "0" + hh : hh;
	mm = mm < 10 ? "0" + mm : mm;
	ss = ss < 10 ? "0" + ss : ss;

	return hh + ":" + mm + ":" + ss;
};
