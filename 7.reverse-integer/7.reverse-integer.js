/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (26.25%)
 * Likes:    6084
 * Dislikes: 8914
 * Total Accepted:    1.9M
 * Total Submissions: 7.1M
 * Testcase Example:  '123'
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed
 * or unsigned).
 *
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 * Example 2:
 * Input: x = -123
 * Output: -321
 * Example 3:
 * Input: x = 120
 * Output: 21
 * Example 4:
 * Input: x = 0
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	if (Math.abs(x) / 10 < 1) return x;

	const isNagative = x < 0;
	let currNum = isNagative ? -x : x;
	let str = "";

	while (currNum >= 1) {
		str += currNum % 10;
		currNum = Math.floor(currNum / 10);
	}

	const result = isNagative ? -Number(str) : Number(str);
	const maxValue = 2 ** 31;
	if (result < -maxValue || result > maxValue - 1) return 0;

	return result;
};
// @lc code=end
