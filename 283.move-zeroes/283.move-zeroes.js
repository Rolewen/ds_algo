/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let r = nums.length - 1;

	for (let i = 0; i < r; i++) {
		if (nums[i] === 0) {
			for (let j = r; j >= i; j--) {
				const tmp = nums[i];
				nums[i] = nums[j];
				nums[j] = tmp;
			}

			r--;
		}

		if (nums[i] === 0) i--; //如果交換完畢後，當前數字是0，則需要從目前數字再重新進行一次swap
	}
};
// @lc code=end
