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
	const set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let res = 0;
	let pos = 0;

	while (columnTitle) {
		const lastIdx = columnTitle.length - 1;
		const last = columnTitle.charAt(columnTitle.length - 1);

		const n = (set.indexOf(last) + 1) * 26 ** pos;
		columnTitle = columnTitle.slice(0, lastIdx);

		pos++;
		res += n;
	}

	return res;
};
// @lc code=end
