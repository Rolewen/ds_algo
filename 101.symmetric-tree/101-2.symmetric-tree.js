/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
	const mirror = (r, l) => {
		if (!r && !l) return true;
		if (r?.val !== l?.val) return false;
		return mirror(r.right, l.left) && mirror(r.left, l.right);
	};

	return mirror(root.right, root.left);
};
// @lc code=end
