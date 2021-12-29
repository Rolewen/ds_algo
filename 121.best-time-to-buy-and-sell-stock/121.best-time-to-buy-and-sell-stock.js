/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let min = Number.MAX_VALUE;
	let profit = 0;

	for (let i = 0; i < prices.length; i++) {
		let p = prices[i];

		if (p < min) {
			min = p;
		}

		let tmpProfit = p - min;
		if (tmpProfit > profit) {
			profit = tmpProfit;
		}
	}

	return profit;
};
// @lc code=end
