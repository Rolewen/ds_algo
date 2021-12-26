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
	let left = [];
	let right = [];
	let l = root.left;
	let r = root.right;
	let res = l && r;

	while (l || r || left.length || right.length) {
		if ((!l && r) || (l && !r)) {
			res = false;
			break;
		}

		if (!l && !r) {
			l = left.pop();
			r = right.pop();
			l = l.right;
			r = r.left;
		} else if (l.val === r.val) {
			left.push(l);
			right.push(r);
			l = l.left;
			r = r.right;
		} else if (l.val !== r.val) {
			res = false;
			break;
		}
	}

	return res;
};
// @lc code=end
