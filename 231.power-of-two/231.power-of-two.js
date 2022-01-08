/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n === 1) return true;
	if (n === 0 || n % 2 !== 0) return false;

	const end = n / 2 > 31 ? 31 : n / 2;

	for (let i = 0; i <= end; i++) {
		let tmp = 2 ** i;
		if (tmp === n) return true;
	}

	return false;
};
// @lc code=end
