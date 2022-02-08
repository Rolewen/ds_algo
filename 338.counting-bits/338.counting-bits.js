/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	let res = [];
	for (let i = 0; i <= n; i++) {
		res.push(getBits(i));
	}

	return res;
};

const getBits = n => {
	let count = 0;

	while (n >= 1) {
		if (n % 2 === 1) count++;
		n = Math.floor(n / 2);
	}

	return count;
};
// @lc code=end
