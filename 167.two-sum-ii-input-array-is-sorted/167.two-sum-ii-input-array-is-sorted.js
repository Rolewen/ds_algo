/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let d = {};

	for (let i = 0; i < numbers.length; i++) {
		let n1 = target - numbers[i];

		if (d[n1]) {
			return [d[n1].i, i + 1];
		} else {
			d[numbers[i]] = {
				i: i + 1,
				v: numbers[i]
			};
		}
	}
};
// @lc code=end
