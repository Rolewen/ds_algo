/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let count = 0;

	for (let i = 0; i < 32; i++) {
		if (parseInt(n % 2) === 1) {
			count++;
		}
		n = parseInt(n / 2);
	}

	return count;
};
// @lc code=end
