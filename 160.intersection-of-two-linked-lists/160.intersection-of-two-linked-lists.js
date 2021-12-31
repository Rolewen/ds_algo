/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	const getLength = nodes => {
		let l = 0;

		while (nodes) {
			l++;
			nodes = nodes.next;
		}

		return l;
	};

	const movePointer = (nodes, p) => {
		while (p !== 0) {
			nodes = nodes.next;
			p--;
		}
		return nodes;
	};

	const diff = getLength(headA) - getLength(headB);

	if (diff < 0) {
		headB = movePointer(headB, -diff);
	} else {
		headA = movePointer(headA, diff);
	}

	while (headA && headB) {
		if (headA === headB) {
			return headA;
		}

		headA = headA.next;
		headB = headB.next;
	}

	return null;
};
// @lc code=end
