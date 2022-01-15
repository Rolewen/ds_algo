/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
	if (n <= 0) return false;
	if (n === 1) return true;

	const mod = (num, modNumber) => {
		while (num > modNumber) {
			if (num % modNumber === 0) {
				num = parseInt(num / modNumber);
			} else {
				break;
			}
		}

		return num;
	};

	n = mod(n, 2);
	n = mod(n, 3);
	n = mod(n, 5);

	return !(n % 2) || !(n % 3) || !(n % 5);
};
// @lc code=end
