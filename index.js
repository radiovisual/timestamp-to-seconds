'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`timestamp-to-seconds expected a string, got ${typeof input}`);
	}

	const commaIndex = input.indexOf(',');

	if (commaIndex > -1) {
		input = input.substr(0, commaIndex);
	}

	const times = input.split(':').map(number => {
		return parseInt(number, 10);
	});

	if (times.length < 3 || times.length > 4) {
		throw new Error('timestamp-to-seconds expected a timestamp format of HH:MM:SS');
	}

	let seconds = 0;

	seconds += times[0] * 60 * 60;
	seconds += times[1] * 60;
	seconds += times[2];

	return seconds;
};
