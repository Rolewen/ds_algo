/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.71%)
 * Likes:    5944
 * Dislikes: 349
 * Total Accepted:    1.1M
 * Total Submissions: 2.6M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be if
 * it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * Example 4:
 * Input: nums = [1,3,5,6], target = 0
 * Output: 0
 * Example 5:
 * Input: nums = [1], target = 0
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums contains distinct values sorted in ascending order.
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	if (nums[nums.length - 1] < target) return nums.length;

	const middle = Math.floor(nums.length / 2);
	let pivot = 0;

	if (nums[middle] === target) {
		return middle;
	} else {
		let startIdx = middle;
		let endIdx = nums.length - 1;

		if (nums[middle] > target) {
			startIdx = 0;
			endIdx = middle;
		}

		for (let i = startIdx; i <= endIdx; i++) {
			if (nums[i] === target || nums[i] > target) {
				pivot = i;
				break;
			}
		}
	}

	return pivot;
};
// @lc code=end
