/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	while (num > 9) {
		let sum = 0;
		("" + num).split("").forEach(n => (sum += Number(n)));

		if (sum <= 9) return sum;
		num = sum;
	}

	return num;
};
// @lc code=end
