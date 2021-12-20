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
	let result = [];

	// 原始絲路 O(n^2)
	// for (var i = 0; i < nums.length; i++) {
	// 	for (var j = i + 1; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === target) {
	// 			return [i, j];
	// 		}
	// 	}
	// }

	// 進階絲路 O(n)
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		const tmpN = target - nums[i];
		if (map[`${tmpN}`] !== undefined) {
			return [i, map[tmpN]];
		} else {
			map[nums[i]] = i;
		}
	}

	return result;
};
// @lc code=end
