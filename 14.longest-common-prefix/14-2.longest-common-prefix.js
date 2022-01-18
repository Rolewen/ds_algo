/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (38.28%)
 * Likes:    6172
 * Dislikes: 2648
 * Total Accepted:    1.3M
 * Total Submissions: 3.4M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 * Example 1:
 *
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 * 012345, 012345
 * flower, flight
 * 01
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (!strs.length) return "";

	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		for (let j = 0; j < prefix.length; j++) {
			if (prefix.charAt(j) !== strs[i].charAt(j)) {
				prefix = prefix.slice(0, j);
				break;
			}
		}
	}

	return prefix;
};
// @lc code=end
