/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	return rec(nums, 0, nums.length - 1);
};

const rec = (nodes, start, end) => {
	if (start > end) return null;

	const mid = Math.floor((start + end) / 2);
	let res = new TreeNode(nodes[mid]);
	res.left = rec(nodes, start, mid - 1);
	res.right = rec(nodes, mid + 1, end);

	return res;
};
// @lc code=end
