# [258.add-digits](https://leetcode.com/problems/add-digits/)

### Category / Difficulty
algorithms / Easy

### Tags
math
	 		
### Companies
adobe | microsoft

## Description
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:
```
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
```

Example 2:
```
Input: num = 0
Output: 0
```

## Constraints
- 0 <= num <= 231 - 1

## 簡而言之，它要的是
將數字中所有位數相加，直到最終結果為個位數為止

## 思路
1. 將數字轉為字串並將每位數切割出來放入陣列中
2. 將陣列所有數值進行相加

如果數值為個位數則直接回傳，否則將當前數字回到步驟一進行下一輪計算


## Follow up
Could you do it without any loop/recursion in O(1) runtime?

