# [202.happy-number](https://leetcode.com/problems/happy-number/)

### Category / Difficulty
algorithms / Easy

### Tags
hash-table | math
	 		
### Companies
airbnb | twitter | uber

## Description
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:
```
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

Example 2:
```
Input: n = 2
Output: false
```

## Constraints
- 1 <= n <= 231 - 1


## 簡而言之，它要的是
給予一數字，將各個位數平方後相加，若最終會為1，則回傳true，若不是1或進入無限迴圈，則回傳false

## 思路
計算各個位數的平方值，並將結果紀錄於tmp變數中
若已經計算完畢(n<1)，檢查tmp是否為1，若是則回傳結果值
不是則繼續下一輪檢查(n=tmp，並將tmp恢復初始值0)

另外需處理進入無限迴圈的情況，定義一map紀錄已經計算過的數字，若相同數字又出現，表示進入無限迴圈，此時便可終止計算，此數非happy number

## 進階思路

