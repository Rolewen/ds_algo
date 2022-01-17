/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = {};

	for (let i = 0; i < nums.length; i++) {
		let n = target - nums[i];

		if (map[n] !== null && map[n] !== undefined) {
			return [map[n], i];
		} else {
			map[nums[i]] = i;
		}
	}
};
// @lc code=end
