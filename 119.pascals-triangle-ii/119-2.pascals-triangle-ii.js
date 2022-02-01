/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	let res = [];

	for (let i = 0; i <= rowIndex; i++) {
		let row = [1];

		for (let j = 1; j <= i; j++) {
			if (j === i) {
				row.push(1);
			} else {
				row.push(res[i - 1][j] + res[i - 1][j - 1]);
			}
		}

		res.push(row);
	}

	return res[rowIndex];
};
// @lc code=end
