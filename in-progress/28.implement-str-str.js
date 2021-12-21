/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (35.72%)
 * Likes:    3246
 * Dislikes: 3033
 * Total Accepted:    1.1M
 * Total Submissions: 3M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 *
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * Example 3:
 * Input: haystack = "", needle = ""
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * 0 <= haystack.length, needle.length <= 5 * 10^4
 * haystack and needle consist of only lower-case English characters.
 *
 * ""mississippi"\n"issi""
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (needle === "" || haystack === needle) return 0;
	if (needle.length > haystack.length) return -1;

	let match = false;
	let pivot = 0;
	let i = 0;
	while (i < haystack.length) {
		pivot = i;
		for (let j = 0; j < needle.length; j++) {
			if (haystack.charAt(pivot) !== needle.charAt(j)) {
				break;
			} else if (j === needle.length - 1) {
				match = true;
				break;
			}

			pivot++;
		}

		if (match) {
			pivot = i;
			break;
		}

		i++;
	}

	return match ? pivot : -1;
};
// @lc code=end
