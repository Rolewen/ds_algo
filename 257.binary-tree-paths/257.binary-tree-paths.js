/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	let res = [];

	const path = (node, str) => {
		if (!node.left && !node.right) {
			res.push(str + node.val);
		} else {
			if (node.left) {
				path(node.left, str + node.val + "->");
			}

			if (node.right) {
				path(node.right, str + node.val + "->");
			}
		}
	};

	path(root, "");

	return res;
};
// @lc code=end
