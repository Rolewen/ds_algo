/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let res = [];
	for (let i = 0; i < numRows; i++) {
		let tmp = [];
		for (let j = 0; j <= i; j++) {
			if (i <= 1 || j === 0 || j === i) {
				tmp.push(1);
			} else {
				const prevLayer = res[i - 1];
				tmp.push(prevLayer[j - 1] + prevLayer[j]);
			}
		}

		res.push(tmp);
	}

	return res;
};
// @lc code=end
