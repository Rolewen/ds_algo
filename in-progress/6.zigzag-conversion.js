/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (40.29%)
 * Likes:    3075
 * Dislikes: 7244
 * Total Accepted:    675.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 0,1,2,1,0,1,2
 * 0,1,2,3,4,5
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 0,1,2,3,4,5,6
 * 0,1,2,3,2,1,0
 * Example 3:
 *
 *
 * Input: s = "A", numRows = 1
 * Output: "A"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1) return s;

	let resultArr = [];
	for (let n = 1; n <= numRows; n++) resultArr = [...resultArr, []];

	let pivot = 0;
	let increase = 1;

	for (let i = 0; i < s.length; i++) {
		resultArr[pivot].push(s.charAt(i));

		if ((pivot + 1) % numRows === 0) increase = -1;
		if (pivot === 0) increase = 1;

		pivot += increase;
	}

	let resultPattern = "";
	resultArr.forEach(a => {
		resultPattern += a.join("");
	});

	return resultPattern;
};
// @lc code=end
