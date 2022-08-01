/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	const result = [];
	if (nums.length < 3) return results;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				const tmp = nums[i];
				nums[i] = nums[j];
				nums[j] = tmp;
			}
		}
	}

	let target = 0;
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break;

		// to prevent duplicate, skip numbers already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let r = nums.length - 1;
		let j = i + 1;

		while (j < r) {
			let sum = nums[i] + nums[j] + nums[r];

			if (sum === target) {
				result.push([nums[i], nums[j], nums[r]]);

				// continue to increment `j` and decrement `r` as long as those values are duplicated.
				// otherwise, an input array of [-2,0,0,2,2] would result in [[-2,0,2], [-2,0,2]].
				while (nums[j] === nums[j + 1]) j++;
				while (nums[r] === nums[r - 1]) r--;

				j++;
				r--;

				// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++;

				// (sum > target) if the sum is too large, decrement `r` to get closer to the target
			} else {
				r--;
			}
		}
	}

	return result;
};
// @lc code=end
