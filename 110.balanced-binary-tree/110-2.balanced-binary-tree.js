/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */

var isBalanced = function (root) {
	if (!root) return true;

	const r = maxDepth(root.right);
	const l = maxDepth(root.left);

	return (
		Math.abs(r - l) <= 1 && isBalanced(root.left) && isBalanced(root.right)
	);
};

const maxDepth = root => {
	if (!root) return 0;

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// @lc code=end
