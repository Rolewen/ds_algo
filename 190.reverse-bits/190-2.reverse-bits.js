/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	let res = 0;

	for (let pos = 31; pos >= 0; pos--) {
		res += (n & 1) * 2 ** pos;
		n = n >> 1;
	}

	return res;
};
// @lc code=end
