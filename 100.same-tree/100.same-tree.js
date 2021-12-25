/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	let pStack = [];
	let qStack = [];

	let same = true;
	while (p || q || pStack.length || qStack.length) {
		if ((!p && q) || (p && !q)) {
			same = false;
			break;
		}

		if (!p && !q) {
			p = pStack.pop();
			p = p.right;
			q = qStack.pop();
			q = q.right;
		} else if (p.val === q.val) {
			pStack.push(p);
			p = p.left;
			qStack.push(q);
			q = q.left;
		} else if (p.val !== q.val) {
			same = false;
			break;
		}
	}

	return same;
};
// @lc code=end
