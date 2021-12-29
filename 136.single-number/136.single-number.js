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
	let dict = {};

	for (let i = 0; i < nums.length; i++) {
		let n = nums[i];
		dict[n] = dict[n] ? dict[n] + 1 : 1;
	}

	for (let i in dict) {
		if (dict[i] === 1) return i;
	}
};
// @lc code=end
