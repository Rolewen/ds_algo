# [119.pascals-triangle-ii](https://leetcode.com/problems/pascals-triangle-ii)

### Category / Difficulty
algorithms / Easy

### Tags
array
	 		
### Companies
amazon

## Description

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

![image info](./img/119e1.gif)
```
Input: rowIndex = 3
Output: [1,3,3,1]
```

Example 2:
```
Input: rowIndex = 0
Output: [1]
```

Example 3:
```
Input: rowIndex = 1
Output: [1,1]
```

## Constraints
- 0 <= rowIndex <= 33

## 簡而言之，它要的是
回傳pascal's triangle第index row的數列

## 絲路
使用雙迴圈計算數值

外層迴圈為列
內層迴圈計算每列中每個數的值

可由圖觀察出，row1, row2以及每row中第一個數與最後一個數皆為1
其餘數字則由上一層相鄰的兩數(row-1的當前index-1+row-1的當前index)相加而成

計算至第rowIndex列，最後將結果回傳

## Follow up
Could you optimize your algorithm to use only O(rowIndex) extra space?

