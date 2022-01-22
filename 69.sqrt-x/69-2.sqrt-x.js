/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (36.03%)
 * Likes:    2935
 * Dislikes: 2866
 * Total Accepted:    891.4K
 * Total Submissions: 2.5M
 * Testcase Example:  '4'
 *
 * Given a non-negative integer x, compute and return the square root of x.
 *
 * Since the return type is an integer, the decimal digits are truncated, and
 * only the integer part of the result is returned.
 *
 * Note: You are not allowed to use any built-in exponent function or operator,
 * such as pow(x, 0.5) or x ** 0.5.
 *
 *
 * Example 1:
 *
 *
 * Input: x = 4
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since the decimal part
 * is truncated, 2 is returned.
 *
 *
 * Constraints:
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x === 0) return 0;
	if (x <= 3) return 1;

	const end = x / 2;

	for (let i = 2; i <= end; i++) {
		let next = i + 1;
		if (i * i <= x && next * next > x) {
			return i;
		}
	}
};
// @lc code=end
