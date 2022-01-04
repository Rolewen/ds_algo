/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head) return null;

	let res = head;
	let next = head.next;
	res.next = null;

	while (next) {
		let curr = next;
		next = next.next;
		curr.next = res;
		res = curr;
	}

	return res;
};
// @lc code=end
