/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	let mp = {};
	let ms = {};
	let value = 1;

	const p = pattern.split("");
	const str = s.split(" ");

	if (p.length !== str.length) return false;

	for (i = 0; i < pattern.length; i++) {
		const curr_p = p[i];
		const curr_s = str[i];

		if (!mp[curr_p] && !ms[curr_s]) {
			mp[curr_p] = value;
			ms[curr_s] = value;
			value++;
		}

		if (mp[curr_p] !== ms[curr_s]) {
			return false;
		}
	}

	return true;
};
// @lc code=end
