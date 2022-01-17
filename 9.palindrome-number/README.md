# [9.palindrome-number](https://leetcode.com/problems/palindrome-number)

### Category / Difficulty
algorithms / Easy

### Tags
math
	 		
### Companies
Unknown

## Description

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:
```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

Example 2:
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

Example 3:
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

## Constraints
- -231 <= x <= 231 - 1

## 簡而言之，它要的是
給予一數字，檢查是否為迴文

121121=>是迴文
101=>是迴文
110=>不是迴文
-101=>不是迴文

## 絲路
將數字先轉為字串，定義左右指標，左指標由0開始往右移動，右指標由最後一個字元開始往左移動
依序移動左右指標，直至左右指標交會，途中若有一字元不相等則表示非迴文

## Follow up
Could you solve it without converting the integer to a string?

## 進階絲路
依序由個位數開始取出數字，並將其擺至最高位，達到反轉效果，邏輯如下述

假設數字為321，回傳的變數為res

第一輪
使用10的餘數取出的位數為1，加進res中，當前位數以計算完畢，將目前數字除10，往下一數邁進(321/10=32)

第二輪
取出的位數為2，res中的1要比當前的數(2)高一位數，只要將res*10就可以達成，然後再將2加入res中
當前位數以計算完畢，將目前數字除10，往下一數邁進(32/10=3)

第三輪
取出的位數為3，res中的12要比當前的數(3)高一位數，只要將res*10就可以達成，然後再將3加入res中
當前位數以計算完畢，將目前數字除10，往下一數邁進(3/10=0)

數字除到剩0表示所有位數都計算完畢，最後res會等於反轉後的數值123