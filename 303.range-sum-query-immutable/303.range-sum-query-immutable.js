/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	// solution 1
	// this.array = nums;

	// solution 2
	this.sum = [];
	let s = 0;

	for (let i in nums) {
		s += nums[i];
		this.sum.push(s);
	}
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
	// solution 1
	// let res = 0;
	// while (left <= right) {
	// 	res += this.array[left];
	// 	left++;
	// }
	// return res;

	// solution 2
	return this.sum[right] - (left - 1 >= 0 ? this.sum[left - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
