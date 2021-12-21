/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.51%)
 * Likes:    14628
 * Dislikes: 856
 * Total Accepted:    1.6M
 * Total Submissions: 5M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a"
 * Output: "a"
 *
 *
 * Example 4:
 *
 *
 * Input: s = "ac"
 * Output: "a"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 * a,b,b,c 0,1,2,3
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (s.length === 1) return s;

	let pattern = "";
	for (let i = 0; i < s.length; i++) {
		let lastMatchIdx = s.lastIndexOf(s.charAt(i));

		let tmpPattern = s.substring(i, lastMatchIdx + 1);
		let isOdds = Boolean(tmpPattern.length % 2);

		let tailStrIdx = tmpPattern.length - 1;
		let firstStrIdx = 0;

		while (tmpPattern.length) {
			if (
				tmpPattern.charAt(tailStrIdx) !== tmpPattern.charAt(firstStrIdx)
			) {
				tmpPattern = tmpPattern.substring(0, tmpPattern.length - 1);
				firstStrIdx = 0;
				tailStrIdx = tmpPattern.length - 1;
				isOdds = Boolean(tmpPattern.length % 2);
				continue;
			}

			if (
				(isOdds && tailStrIdx === firstStrIdx) ||
				(!isOdds && firstStrIdx === tailStrIdx - 1)
			) {
				pattern =
					tmpPattern.length > pattern.length ? tmpPattern : pattern;
				break;
			}

			firstStrIdx++;
			tailStrIdx--;
		}

		if (tmpPattern.length + i > s.length) break;
	}

	return pattern;
};
// @lc code=end
