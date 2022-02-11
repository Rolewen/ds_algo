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
	const map = {};

	for (let i in numbers) {
		if (map[numbers[i]]) {
			return [map[numbers[i]], Number(i) + 1];
		} else {
			map[target - numbers[i]] = Number(i) + 1;
		}
	}
};
// @lc code=end
