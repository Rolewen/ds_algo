/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	if (n === 1) return true;

	while (n >= 3) {
		if (n === 3) return true;
		n /= 3;
	}

	return false;
};
// @lc code=end
