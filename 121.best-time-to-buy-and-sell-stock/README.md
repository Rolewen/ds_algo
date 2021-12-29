# [121.best-time-to-buy-and-sell-stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### Category / Difficulty
algorithms / Easy

### Tags
array | dynamic-programming
	 		
### Companies
amazon | bloomberg | facebook | microsoft | uber

## Description
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

Example 2:
```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```
 
## Constraints
- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104

## 簡而言之，它要的是
找出買進賣出價位，回傳最大化的收益

## 絲路
定義最小值min，預設為js中最大的數值
定義profit計算收益

使用迴圈依序走訪數列中每個數值

若當前價位比min低，表示此數值為當前找到的最小值，將其塞入min中

若當前數值與min相減大於profit紀錄的數值，表示為目前查找到最大化的收益

