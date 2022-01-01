# [168.excel-sheet-column-title](https://leetcode.com/problems/excel-sheet-column-title/)

### Category / Difficulty
algorithms / Easy

### Tags
math
	 		
### Companies
facebook | microsoft | zenefits

## Description
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:
```
Input: columnNumber = 1
Output: "A"
```

Example 2:
```
Input: columnNumber = 28
Output: "AB"
```
Example 3:
```
Input: columnNumber = 701
Output: "ZY"
```

## Constraints
1 <= columnNumber <= 231 - 1

## 簡而言之，它要的是
給予一個正整數，算出該數字對應的EXCEL欄位title

## 絲路
A為1, B為2, ....Z為26
AA為  1 * 26^1 + 1
BA為  2 * 26^1 + 1
BA為  2 * 26^1 + 2
ABA為 1 * 26^2 + 2 * 26^1 + 1

取26的餘數推算出它是A~Z中的哪一位
接著再使用/26取出下一位數，進行餘數計算

另外要額外特別處理的是數字剛好為26的倍數


## 進階絲路

