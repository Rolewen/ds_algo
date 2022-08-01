/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let l = 0;
	let r = height.length - 1;
	let water = 0;
	while (l < r) {
		water = Math.max(water, Math.min(height[l], height[r]) * (r - l));
		height[r] > height[l] ? l++ : r--;
	}
	return water;
};
// @lc code=end
