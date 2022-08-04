/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	let result = nums[0] + nums[1] + nums[2];

	// sorting array
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				const tmp = nums[i];
				nums[i] = nums[j];
				nums[j] = tmp;
			}
		}
	}

	for (let l = 0; l < nums.length - 2; l++) {
		let r = nums.length - 1;
		let m = l + 1; // m is between l and r pointer

		while (m < r) {
			const sum = nums[l] + nums[m] + nums[r];

			if (sum === target) {
				return sum;
			}

			if (Math.abs(sum - target) <= Math.abs(result - target)) {
				result = sum;
			}

			// if sum is less than target, we should increase the value to close the target. vice versa.
			if (sum < target) {
				m++;
			} else {
				r--;
			}
		}
	}

	return result;
};
// @lc code=end
