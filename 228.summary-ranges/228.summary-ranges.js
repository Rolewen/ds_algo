/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	if (!nums.length) return [];
	let res = [];
	let tmp = [];
	let i = 0;

	const setTmp = () => {
		if (tmp.length > 1) {
			res.push(`${tmp[0]}->${tmp[tmp.length - 1]}`);
		} else {
			res.push(`${tmp[0]}`);
		}
	};

	while (i < nums.length) {
		if (nums[i] - nums[i - 1] > 1) {
			setTmp();
			tmp = [nums[i]];
		} else {
			tmp.push(nums[i]);
		}

		i++;
	}

	setTmp();

	return res;
};
// @lc code=end
