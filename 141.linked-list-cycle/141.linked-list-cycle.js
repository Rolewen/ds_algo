/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (!head || !head.next) return false;

	let turtle = head;
	let bunny = head;

	while (bunny && turtle) {
		bunny = bunny.next?.next;
		turtle = turtle.next;

		if (bunny === turtle) {
			return true;
		}
	}

	return false;
};
// @lc code=end
