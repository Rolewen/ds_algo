/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	let res = new ListNode();
	let prev = res;
	res.next = head;

	while (head) {
		if (head.val === val) {
			prev.next = head.next;
			head = head.next;
		} else {
			prev = head;
			head = head.next;
		}
	}

	return res.next;
};
// @lc code=end
