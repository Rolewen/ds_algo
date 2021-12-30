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
	let res = [];

	if (!root) return res;

	const postOrder = (root, res) => {
		if (root.left) res = postOrder(root.left, res);
		if (root.right) res = postOrder(root.right, res);

		res.push(root.val);

		return res;
	};

	postOrder(root, res);

	return res;
};
// @lc code=end
