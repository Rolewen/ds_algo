# [118.pascals-triangle](https://leetcode.com/problems/pascals-triangle)

### Category / Difficulty
algorithms / Easy

### Tags
array
	 		
### Companies
apple | twitter

## Description
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


Example 1:

![image info](./img/118e1.gif)
```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

Example 2:
```
Input: numRows = 1
Output: [[1]]
```

## Constraints
- 1 <= numRows <= 30

## 簡而言之，它要的是
給予列數，回傳Pascal's triangle數列

Pascal's triangle的每個值，為上方相鄰的兩個數相加而成


## 思路
使用雙迴圈計算數值

外層迴圈為列
內層迴圈計算每列中每個數的值

可由圖觀察出，row1, row2以及每row中第一個數與最後一個數皆為1
其餘數字則由上一層相鄰的兩數(row-1的當前index-1+row-1的當前index)相加而成

