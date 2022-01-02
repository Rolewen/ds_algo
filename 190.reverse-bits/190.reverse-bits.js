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
	let pos = 31;

	for (let i = 0; i < 32; i++) {
		res += parseInt(n % 2) * 2 ** pos;
		n = parseInt(n / 2);
		pos--;
	}

	return res;
};
// @lc code=end
