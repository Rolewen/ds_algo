/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/

var addTwoNumbers = function (l1, l2) {
	var result = new ListNode(0);
	let resultList = result;

	let carry = 0;

	while (l1 || l2 || carry === 1) {
		let sum = 0;
		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}

		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}

		sum += carry;

		result.next = new ListNode(sum % 10);

		carry = sum > 9 ? 1 : 0;

		result = result.next;
	}

	return resultList.next;
};
// @lc code=end
