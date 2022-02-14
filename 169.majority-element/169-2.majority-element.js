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
	let map = {};
	let major = { n: 0, count: 0 };

	for (let n of nums) {
		if (map[n]) {
			map[n] += 1;
		} else {
			map[n] = 1;
		}

		if (map[n] > major.count) {
			major = { n, count: map[n] };
		}

		if (major.count > nums.length / 2) break;
	}

	return major.n;
};
// @lc code=end
