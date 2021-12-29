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
	const lowerS = s.toLowerCase().replace(/[\W_]/g, "");
	const revS = lowerS.split("").reverse().join("");
	return revS === lowerS;
};
// @lc code=end
