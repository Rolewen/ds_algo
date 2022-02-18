/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const map = {};
	let sum = 0;

	while (true) {
		sum += (n % 10) ** 2;
		n = parseInt(n / 10);

		if (n < 1) {
			if (sum === 1) return true;
			if (map[sum]) return false;
			map[sum] = n = sum;
			sum = 0;
		}
	}
};
// @lc code=end
