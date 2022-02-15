/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
	let res = 0;
	for (let i = 0; i < columnTitle.length; i++) {
		res +=
			(columnTitle.charAt(i).charCodeAt() - 64) *
			26 ** (columnTitle.length - i - 1);
	}

	return res;
};
// @lc code=end
