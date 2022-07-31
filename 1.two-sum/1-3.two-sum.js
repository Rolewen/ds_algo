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
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (map[n] !== undefined) {
			return [map[n], i];
		} else {
			map[target - n] = i;
		}
	}
};
// @lc code=end
