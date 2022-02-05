/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	if (nums.length === 1) return nums[0];

	let map = {};
	for (let num of nums) {
		map[num] ? delete map[num] : (map[num] = 1);
	}

	return Object.keys(map)[0];
};
// @lc code=end
