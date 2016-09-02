import test from 'ava';
import fn from './';

test('expects a string', t => {
	t.throws(() => {
		fn({});
	}, 'timestamp-to-seconds expected a string, got object');
});

test('expects the format hh:mm:ss', t => {
	t.throws(() => {
		fn('01:02');
	}, 'timestamp-to-seconds expected a timestamp format of HH:MM:SS');
});

test('returns a number', t => {
	t.is(typeof fn('00:00:01'), 'number');
});

test('converts to seconds', t => {
	t.is(fn('01:02:03'), 3600 + 120 + 3);
	t.is(fn('02:10:59'), 7200 + 600 + 59);
});

test('strips comma-delimited millseconds', t => {
	t.is(fn('00:00:01,345'), 1);
	t.is(fn('00:00:59,345'), 59);
});
