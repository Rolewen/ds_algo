/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const new_s = s.toLowerCase().replace(/[\W_]/g, "");
	for (let l = 0, r = new_s.length - 1; l < r; l++, r--) {
		if (new_s.charAt(l) !== new_s.charAt(r)) {
			return false;
		}
	}
	return true;
};
// @lc code=end
