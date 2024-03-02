/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	digits = [...digits];
	digits.forEach((digit, i) => {
		digits[i] = Number(digits[i]);
	});

	const keypad = [
		,
		,
		['a', 'b', 'c'],
		['d', 'e', 'f'],
		['g', 'h', 'i'],
		['j', 'k', 'l'],
		['m', 'n', 'o'],
		['p', 'q', 'r', 's'],
		['t', 'u', 'v'],
		['w', 'x', 'y', 'z'],
	];
	const results = [];

	function recurse(index, combo) {
		//base case
		if (index >= digits.length) {
			results.push(combo);
			return;
		}
		const key = keypad[digits[index]]; //abc

		key.forEach((letter) => {
			recurse(index + 1, combo + letter);
		});
		//for every letter on this number
		//call recurse with index + 1 and combo + letter
	}
	if (digits.length > 0) {
		recurse(0, '');
	}

	return results;
};
