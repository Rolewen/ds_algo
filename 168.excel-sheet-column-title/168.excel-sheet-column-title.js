/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let res = "";
	while (columnNumber > 0) {
		let idx = columnNumber % 26;

		if (idx === 0) {
			idx = 26;
			columnNumber--;
		}

		res = map.charAt(idx - 1) + res;
		columnNumber = parseInt(columnNumber / 26);
	}

	return res;
};
// @lc code=end
