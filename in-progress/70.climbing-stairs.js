/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (50.22%)
 * Likes:    9421
 * Dislikes: 290
 * Total Accepted:    1.3M
 * Total Submissions: 2.6M
 * Testcase Example:  '2'
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 45
 *
 *
 * n=1, 1, 1
 * n=2, 2, 11, 2
 * n=3, 3, 111, 12, 21
 * n=4, 5, 1111, 112, 121, 211, 22
 * n=5, 8
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (n === 1) return 1;

	let prev = 1;
	let curr = 1;
	for (let i = 2; i <= n; i++) {
		let tmp = curr;
		curr += prev;
		prev = tmp;
	}

	return curr;
};
// @lc code=end
