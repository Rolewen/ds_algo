/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	s = s.split("");
	let l = 0;
	let r = s.length - 1;

	const map = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
		A: 1,
		E: 1,
		I: 1,
		O: 1,
		U: 1
	};

	while (l < r) {
		if (map[s[l]] && map[s[r]]) {
			[s[l], s[r]] = [s[r], s[l]];
			l++;
			r--;
		} else if (!map[s[l]]) {
			l++;
		} else {
			r--;
		}
	}

	return s.join("");
};
// @lc code=end
