/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	for (let i = 0; i < nums.length; i++) {
		if (nums.slice(i + 1, i + k + 1).includes(nums[i])) return true;
	}

	return false;
};
// @lc code=end
