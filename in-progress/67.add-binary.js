/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (49.07%)
 * Likes:    3782
 * Dislikes: 443
 * Total Accepted:    717.4K
 * Total Submissions: 1.5M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	let result = "";
	let carry = 0;
	let i = a.length - 1;
	let j = b.length - 1;

	while (i >= 0 || j >= 0) {
		let num1 = a.charAt(i) ?? 0;
		let num2 = b.charAt(j) ?? 0;
		let sum = Number(num1) + Number(num2) + carry;

		if (sum >= 2) {
			result = sum - 2 + result;
			carry = 1;
		} else {
			result = sum + result;
			carry = 0;
		}

		i--;
		j--;
	}

	return carry ? "1" + result : result;
};
// @lc code=end
