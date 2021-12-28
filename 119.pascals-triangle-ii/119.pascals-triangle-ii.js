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
	let res = [[1], [1, 1]];

	for (let i = 2; i <= rowIndex; i++) {
		let tmp = [];
		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				tmp.push(1);
			} else {
				const prev = res[i - 1];
				tmp.push(prev[j] + prev[j - 1]);
			}
		}

		res.push(tmp);
	}

	return res[rowIndex];
};
// @lc code=end
