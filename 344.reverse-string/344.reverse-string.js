/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	for (let l = 0, r = s.length - 1; l < r; l++, r--) {
		[s[l], s[r]] = [s[r], s[l]];
	}
};
// @lc code=end
