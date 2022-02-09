/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
	while (n >= 1) {
		if (n === 1) return true;
		else n /= 4;
	}

	return false;
};
// @lc code=end
