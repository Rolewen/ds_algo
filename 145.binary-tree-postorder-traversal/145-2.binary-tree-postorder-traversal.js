/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
	if (!root) return [];

	let res = [];
	let stack = [root];

	while (stack.length) {
		let node = stack.pop();
		if (node.left || node.right) {
			stack.push(new TreeNode(node.val));
		}

		if (node.right) {
			stack.push(node.right);
		}

		if (node.left) {
			stack.push(node.left);
		}

		if (!node.left && !node.right) {
			res.push(node.val);
		}
	}
	return res;
};
// @lc code=end
