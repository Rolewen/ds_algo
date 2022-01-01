/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let major = { count: 0, value: 0 };
	let map = {};

	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];

		if (map[n]) {
			map[n] += 1;
		} else {
			map[n] = 1;
		}

		if (major.count < map[n]) {
			major.value = n;
			major.count = map[n];
		}
	}

	return major.value;
};
// @lc code=end
