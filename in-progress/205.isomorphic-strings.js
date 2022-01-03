/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	let s1 = {};
	let t1 = {};

	for (let i = 0; i < s.length; i++) {
		let ss = s.charAt(i);
		let tt = t.charAt(i);

		if (s1[ss] === undefined) {
			s1[ss] = Object.keys(s1).length;
		}

		if (t1[tt] === undefined) {
			t1[tt] = Object.keys(t1).length;
		}

		if (s1[ss] !== t1[tt]) {
			return false;
		}
	}

	return true;
};
// @lc code=end
