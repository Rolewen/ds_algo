/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let tmp = 0;
	let shows = {};
	while (!shows[tmp] || tmp) {
		tmp += parseInt(n % 10) ** 2;
		n = parseInt(n / 10);

		if (n < 1) {
			if (tmp === 1) return true;
			if (shows[tmp]) break;
			shows[tmp] = tmp;
			n = tmp;
			tmp = 0;
		}
	}

	return n === 1;
};
// @lc code=end
