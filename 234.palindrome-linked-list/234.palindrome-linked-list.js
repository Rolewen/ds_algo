/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
	if (!head) return false;

	let tmp = [];

	while (head) {
		tmp.push(head.val);
		head = head.next;
	}

	let r = tmp.length - 1;
	let l = 0;

	while (r > l) {
		if (tmp[l] !== tmp[r]) return false;
		r--;
		l++;
	}

	return true;
};
// @lc code=end
