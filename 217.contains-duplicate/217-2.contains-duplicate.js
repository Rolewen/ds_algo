/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let map = {};

	for (let i of nums) {
		if (map[i]) {
			return true;
		} else {
			map[i] = 1;
		}
	}

	return false;
};
// @lc code=end
