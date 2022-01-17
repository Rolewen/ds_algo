/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (51.76%)
 * Likes:    4584
 * Dislikes: 1942
 * Total Accepted:    1.7M
 * Total Submissions: 3.2M
 * Testcase Example:  '121'
 *
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 *
 *
 * For example, 121 is a palindrome while 123 is not.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: x = 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Example 4:
 *
 *
 * Input: x = -101
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 * 0,1,2,3
 * 0,1,2
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	/*
	// solution 1
	// 將數字轉為字串並使用左右指標進行檢查
	*/

	// if (x < 0) return false;
	// let s = x.toString();
	// let l = 0;
	// let r = s.length - 1;

	// while (l < r) {
	// 	if (s[l] !== s[r]) {
	// 		return false;
	// 	}
	// 	l++;
	// 	r--;
	// }

	// return true;

	/*
	// solution 2
	// 定義一變數，逐一取出x值每位數，將個位放至最高位，十位數放至次高，依序反轉
	// 最終若x與反轉出來的res相等，及代表為迴文
	*/
	let res = 0;
	let tmp = x;

	while (tmp >= 1) {
		res = res * 10;
		res += tmp % 10;
		tmp = parseInt(tmp / 10);
	}

	return res == x;
};
// @lc code=end
