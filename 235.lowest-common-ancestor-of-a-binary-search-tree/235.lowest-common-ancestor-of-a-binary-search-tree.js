/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	let ancestor = { [p.val]: [root], [q.val]: [root] };

	const Path = (nodes, target) => {
		if (!nodes || (!nodes.left && !nodes.right)) return null;
		ancestor[target.val].push(nodes);

		if (nodes === target) return null;
		if (nodes.val > target.val && nodes.left) {
			Path(nodes.left, target);
		}

		if (nodes.val < target.val && nodes.right) {
			Path(nodes.right, target);
		}
	};

	const callPath = node => {
		if (node === root) return null;
		if (node.val > root.val) Path(root.right, node);
		else Path(root.left, node);
	};

	callPath(p);
	callPath(q);

	let length = Math.max(ancestor[p.val].length, ancestor[q.val].length) - 1;
	for (let i = 0; i <= length; i++) {
		if (
			(ancestor[p.val][i] === ancestor[q.val][i] &&
				ancestor[p.val][i + 1] !== ancestor[q.val][i + 1]) ||
			i === length
		) {
			return ancestor[p.val][i];
		}
	}
};
// @lc code=end
