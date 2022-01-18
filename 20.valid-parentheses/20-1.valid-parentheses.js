/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.54%)
 * Likes:    10136
 * Dislikes: 396
 * Total Accepted:    1.8M
 * Total Submissions: 4.5M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: s = "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: s = "{[]}"
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length % 2) return false;
	let stack = [];

	const map = {
		")": "(",
		"]": "[",
		"}": "{"
	};

	for (let i = 0; i < s.length; i++) {
		let str = s.charAt(i);
		if (str === "(" || str === "[" || str === "{") {
			stack.push(str);
		} else if (map[str] === stack[stack.length - 1]) {
			stack.pop();
		} else {
			return false;
		}
	}

	return !stack.length;
};
// @lc code=end
