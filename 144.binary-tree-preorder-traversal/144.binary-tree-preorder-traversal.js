/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	let stack = [];
	let res = [];

	while (root || stack.length) {
		if (root) {
			res.push(root.val);
			stack.push(root);
			root = root.left;
		} else {
			root = stack.pop();
			root = root.right;
		}
	}

	return res;
};
// @lc code=end
