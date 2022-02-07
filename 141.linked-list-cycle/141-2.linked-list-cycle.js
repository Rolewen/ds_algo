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
	let slow = head;
	let fast = head?.next;

	while (slow && fast) {
		if (slow === fast) return true;
		fast = fast.next?.next;
		slow = slow.next;
	}

	return false;
};
// @lc code=end
