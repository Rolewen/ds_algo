/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length === 0) return [];

	const map = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz"
	};

	const result = [];
	const recu = (i, str) => {
		if (i === digits.length) {
			result.push(str);
			return;
		}

		for (const c of map[digits[i]]) {
			recu(i + 1, c + str);
		}
	};

	recu(0, "");

	return result;
};
// @lc code=end
